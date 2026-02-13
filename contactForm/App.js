import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      method="post"
      action="https://questions.greatfrontend.com/api/questions/contact-form"
    >
      <p>Name: </p>
      <input id="name" name="name" type="text" />
      <p>Email: </p>
      <input id="email" name="email" type="email" />
      <p>Message: </p>
      <textarea id="message" name="message" />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
