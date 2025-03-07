/* eslint-disable react/prop-types */
export default function SectionTitle({ title, subTitle = "" }) {
  return (
    <div className="pb-8 text-center">
      <h1 className="text-xl font-bold text-black">{title}</h1>
      <p className="text-gray-500">{subTitle}</p>
    </div>
  );
}
