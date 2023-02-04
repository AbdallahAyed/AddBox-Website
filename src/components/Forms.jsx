export function Forms() {
  return (
    <div className="forms">
      <div className="title">
        <h1>What can us do for you?</h1>
        <p>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <select>
          <option>Reason for Contacting</option>
          <option>Social Media</option>
          <option>Ads</option>
          <option>Search</option>
        </select>
        <input type="email" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>
        <p>
          <span>*</span> indicates a required field
        </p>
      </form>
      <button>Submit</button>
    </div>
  );
}
