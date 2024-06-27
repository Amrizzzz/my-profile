export default function Activity() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">25/02/2022 - 01/01/2024</time>
          <div className="text-md font-black italic">PT.DGP NET INTERKONTINENTAL</div>
          <div className="text-lg font-black">Junior Front-End</div>
          <ul className="list-disc list-inside xl:text-end xl:timeline-end">
            <li>Fix some minor bugs</li>
            <li>Create new feature</li>
            <li>Deployment project to main master</li>
          </ul>
        </div>
        <hr />
      </li>
    </ul>
  );
}
