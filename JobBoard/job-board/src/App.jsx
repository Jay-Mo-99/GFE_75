import { useState, useEffect, useRef } from "react";

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

function JobPosting({ url, title, by, time }) {
  const formatTime = new Date(time * 1000).toLocaleString();
  return (
    <div className="card" role="listItem">
      <a
        className={url ? "card-title" : "inactiveLink"}
        href={url}
        target="_blank"
        rel="noopener"
      >
        {title}
      </a>
      <div className="sub-text">
        By {by} · {formatTime}
      </div>
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]); //Render the items(Job Details)
  const [itemIds, setItemsIds] = useState([]); //Entire ID Lists from API
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const didFetch = useRef(false);
  const fetchItems = async (currPage) => {
    setCurrentPage(currPage);
    setFetchingDetails(true);
    let itemsLists = itemIds;
    if (!itemsLists || itemsLists.length === 0) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
      itemsLists = await response.json();
      setItemsIds(itemsLists);
    }

    // Get the IDs for the current page
    const itemIdsForPage = itemsLists.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    );
    // Fetch the job detail data from API using the IDs for the current Page
    const itemsForPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((res) => res.json()),
      ),
    );
    // Append the new items to existing items -> Real rendering items on the page
    setItems((prev) => [...prev, ...itemsForPage]);
    setFetchingDetails(false);
  };

  useEffect(() => {
    if (didFetch.current) return; //If the rendering is already done, then return
    //First time rendering, didFetch.current is false,
    // so it will fetch the items and set didFetch.current to true
    didFetch.current = true;
    fetchItems(0);
  }, []);
  const hasMore = items.length < itemIds.length;
  return (
    <>
      {itemIds === null || items.length < 1 ? (
        <h1 className="title">Loading</h1>
      ) : (
        <>
          <h1 className="title">Hacker News Jobs Board</h1>
          <div className="items" role="list">
            {items.map((item) => {
              return <JobPosting key={item.id} {...item} />;
            })}
          </div>
          {hasMore && (
            <button
              onClick={() => fetchItems(currentPage + 1)}
              className="load-more-btn"
              disabled={fetchingDetails}
            >
              {fetchingDetails ? "Loading" : "Load more jobs"}
            </button>
          )}
        </>
      )}
    </>
  );
}
