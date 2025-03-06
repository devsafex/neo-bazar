/* eslint-disable react/prop-types */
export default function QuestionsCard({ image, question }) {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={image}
            alt="faq"
            className="rounded-t-xl w-72 h-52 object-cover"
          />
        </figure>
        <div className="card-body p-2 bg-green-100">
          <h2 className="card-title font-bold">{question}</h2>
        </div>
      </div>
    </div>
  );
}
