import Link from "next/link";

export default function Resources() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Downloadable Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { category: "Books", items: ["The Life of Cheikh Ahmada Tijani", "Fayda Tijaniyya", "Pearls of Wisdom"] },
            { category: "Articles", items: ["Introduction to Tarbiya", "The Importance of Wird", "Adab in Sufism"] },
            { category: "Pamphlets", items: ["Tijaniyya FAQs", "Daily Adhkar Guide", "Ramadan with the Tijaniyya"] }
          ].map((resource) => (
            <div key={resource.category} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{resource.category}</h3>
              <ul className="list-disc list-inside">
                {resource.items.map((item, index) => (
                  <li key={index}><Link href="#" className="text-blue-600 hover:underline">{item}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Online Texts</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside">
            <li><Link href="#" className="text-blue-600 hover:underline">Jawahir al-Ma'ani (The Gems of Meanings)</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Kashf al-Ilbas (Removal of Confusion)</Link></li>
            <li><Link href="#" className="text-blue-600 hover:underline">Rimaḥ Ḥizb al-Raḥim (The Spears of the Party of the Merciful)</Link></li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Recommended Reading List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "The Jewels of Gnosis",
            "The Removal of Confusion",
            "The Flood of Mercy",
            "The Key to Certainty"
          ].map((book, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{book}</h3>
              <p className="text-gray-600 mb-4">Author: Various Tijaniyya Scholars</p>
              <Link href="#" className="text-green-700 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}