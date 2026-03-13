import { useState, useEffect, useRef } from "react";

/**
 * Steps
 *
 * 1. Create the component(JobPosting) to display each job description
 * - props: title, url, score, by, time
 *
 * 2. When first rendering, call the fetchItems functions
 * - If the jobIDs array are empty,Get the jobIDs from API
 * - slice the current page's job IDs base on the current page and itmes_per_page
 * - fetch the job details using the sliced job IDS
 * - Append the new items to existing job details
 *
 * 3. When click the button, call the fetchItems functions with the currentPage+1
 * - If the jobIDs.length === jobDetails.length, Hide the button
 *
 */

export default function App() {
  const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
  const ITEMS_PER_PAGE = 6;
  let [currentPage, setCurrentPage] = useState(0);
  let [jobIDs, setJobIds] = useState([]);
  let [jobDetails, setJobDetails] = useState([]);
  let firstRender = useRef(true);
  let hasMoreJobs = jobIDs.length > jobDetails.length;
  //True -> There are more jobs to load
  //False -> All the jobs are loaded, no more new job to load

  async function fetchItems(page) {
    setCurrentPage(page);

    let id_data = jobIDs;

    if (id_data.length === 0) {
      const id_res = await fetch(`${API_ENDPOINT}/jobstories.json`);
      id_data = await id_res.json();
      setJobIds(id_data);
    }

    const jobIDsForPage = id_data.slice(
      page * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    );

    const jobDetailsForPage = await Promise.all(
      jobIDsForPage.map((jobId) =>
        fetch(`${API_ENDPOINT}/item/${jobId}.json`).then((res) => res.json()),
      ),
    );

    setJobDetails((prev) => [...prev, ...jobDetailsForPage]);
  }

  useEffect(() => {
    console.log(jobDetails);
  }, [jobDetails]);

  useEffect(() => {
    if (!firstRender.current) return;
    firstRender.current = false;
    fetchItems(currentPage);
  }, []);

  function JobPosting({ title, url, by, time }) {
    return (
      <div className="card">
        <a className="card-title" href={url}>
          {title}
        </a>
        <div className="card-subText">
          By {by} · {time}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Hacker News Jobs Board</h1>
      {jobDetails.map((jobDetail) => (
        <JobPosting key={jobDetail.id} {...jobDetail} />
      ))}

      {hasMoreJobs && (
        <button
          onClick={() => fetchItems(currentPage + 1)}
          className="load-btn"
        >
          Load More
        </button>
      )}
    </div>
  );
}
