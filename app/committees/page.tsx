import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"


export default function CommitteePage() {
  return (
  <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }}>
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg mb-6 animate-fade-in">Organizing Committee</h1>


        <div className="space-y-6">
  <h2 className="text-2xl font-semibold text-green-700">Chief Patrons</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Mr.-Shital-Sir.jpeg" alt="Mr. Shital Agrawal" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Shital Agrawal</h3>
      <p className="text-sm text-green-700 mb-1">President, Silver Oak Univeristy</p>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/poonam-agarawal.jpeg" alt="Mrs. Poonam Agrawal" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mrs. Poonam Agrawal</h3>
      <p className="text-sm text-green-700 mb-1">Executive President, Silver Oak University </p>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.19.29-PM.jpeg" alt="Mr. Aditya Agrawal" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Aditya Agrawal</h3>
      <p className="text-sm text-green-700 mb-1">Managing Director, Silver Oak University </p>
    </div>
    {/* Card 4 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Mr.-Janak-khandvala.jpeg" alt="Mr. Janak Khandwala" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Janak Khandwala</h3>
      <p className="text-sm text-green-700 mb-1">Vice President, Silver Oak University</p>
    </div>
    {/* Card 5 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Sweta-Khandwala.webp" alt="Mrs. Sweta Khandwala" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mrs. Sweta Khandwala</h3>
      <p className="text-sm text-green-700 mb-1">Vice president, Academics, Silver Oak University </p>
    </div>
    {/* Card 6 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-M.-N.-Patel.jpeg" alt="Dr. M N Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. M N Patel</h3>
      <p className="text-sm text-green-700 mb-1">Advisor, Silver Oak University and Ex - Vice Chancellor, Gujarat University and  Gujarat Technological University</p>
    </div>
  </div>
</div>

<div className="space-y-6">
  <h2 className="text-2xl font-semibold text-green-700">Patrons</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Surin-shah.jpeg" alt="Dr. Saurin Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Saurin Shah</h3>
      <p className="text-sm text-green-700 mb-1">Vice Chancellor, Silver Oak University</p>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Pina-bhatt.jpeg" alt="Dr. Pina Bhatt" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Pina Bhatt</h3>
      <p className="text-sm text-green-700 mb-1">Pro Vice-Chancellor, Silver Oak University </p>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Mit-Shah.jpeg" alt="Dr. Mit Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Mit Shah</h3>
      <p className="text-sm text-green-700 mb-1">Registrar, Silver Oak University </p>
    </div>
  </div>
</div>


        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">General Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1620591758322.jpeg" alt="Dr. Satvik Khara" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Satvik Khara</h3>
              <p className="text-sm text-green-700 mb-1">Dean, Collage of Technology</p>
             
            </div>
            {/* Card 2 */}
            {/* <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1668676239088.jpeg" alt="Prof. B. Singh" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Prof. Digant Parmar</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Collage of Technology</p>
             
            </div> */}
            {/* Card 3 */}
            {/* <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. C. Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sagar </h3>
              <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
            </div> */}
          </div>
        </div>
        


        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-900">Program Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                          <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jaimin-Dave.jpeg" alt="Dr. Jaimin Dave" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jaimin Dave</h3>
              <p className="text-sm text-green-700 mb-1">Principal, COT, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jitendra-Bhatia.jpeg" alt="Dr. P. Kumar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jitendra Bhatia</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor,Nirma University</p>
             
            </div>
          </div>
        </div>

        
<div className="space-y-6">
  <h2 className="text-2xl font-semibold text-green-700">Advisory</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.19.29-PM-1.jpeg" alt="Dr. Sudip Tanwar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sudip Tanwar</h3>
      {/* <p className="text-sm text-green-700 mb-1">Designation</p> */}
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.34.34-PM.jpeg" alt="Dr. Vimal Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Vimal Vaghela</h3>
      {/* <p className="text-sm text-green-700 mb-1">Designation</p> */}
    </div>
    {/* Card 3 */}

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.19.29-PM-2.jpeg" alt="Dr. Sapan Mankad" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sapan Mankad</h3>
      {/* <p className="text-sm text-green-700 mb-1">Designation</p> */}
    </div>
    {/* Card 5 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.19.30-PM.jpeg" alt="Dr. Uttam Chauhan" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Uttam Chauhan</h3>
      {/* <p className="text-sm text-green-700 mb-1">Designation</p> */}
    </div>
    {/* Card 6 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-17-at-6.19.30-PM-1.jpeg" alt="Dr. R A Thakkar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. R A Thakkar</h3>
      {/* <p className="text-sm text-green-700 mb-1">Designation</p> */}
    </div>
    {/* Card 7 */}

  </div>
</div>



        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Industrial & Technical Advisory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="/placeholder-user.jpg" alt="Dr. Chintan Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Chintan Shah</h3>
              <p className="text-sm text-green-700 mb-1">AI Solutions Engineer, Schofields, NSW, Australia</p>
            </div>

                          <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
                {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/dr-sagar-patel.jpeg" alt="Prof. S. Gupta" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 transition-all duration-300 hover:border-blue-400" /> */}
                <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sagar Patel</h3>
                <p className="text-sm text-green-700 mb-1">Dean Academics,Silver Oak University</p>
               
              </div>

            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Premal-Patel.jpeg" alt="Dr. Premal Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Premal Patel</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, COT, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Neel-Mishra.jpeg" alt="Neel Mishra" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Neel Mishra</h3>
              <p className="text-sm text-green-700 mb-1">Data Scientist, Microsoft</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="/placeholder-user.jpg" alt="Parth Modi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Parth Modi</h3>
              <p className="text-sm text-green-700 mb-1">Software Engineer, Google, San Jose, CA, USA</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Kartik-Derasari.jpeg" alt="Kartik Derasari" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Kartik Derasari</h3>
              <p className="text-sm text-green-700 mb-1">Solutions Engineering Lead - Google Cloud & Applied AI</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Ankit-Shah.jpeg" alt="Dr. Ankit Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Ankit Shah</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, Adani University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Nilesh-Vaghela.jpeg" alt="Nilesh Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Nilesh Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">CEO Electromech</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Arpan-Desai.jpeg" alt="Arpan Desai" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Arpan Desai</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, PDEU</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Sachin-Gajjar.jpeg" alt="Sachin Gajjar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Sachin Gajjar</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, Nirma University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jay-Dave.jpeg" alt="Dr. Jay Dave" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jay Dave</h3>
              <p className="text-sm text-green-700 mb-1">Professor & Dean, Rai University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Harshal-Trivedi.jpeg" alt="Harshal Trivedi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Harshal Trivedi</h3>
              <p className="text-sm text-green-700 mb-1">Founder & CEO TuskerAI</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Vishal-Modi.jpeg" alt="Vishal Modi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Vishal Modi</h3>
              <p className="text-sm text-green-700 mb-1">CTO Softvan</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Asit-Pandit.jpeg" alt="Asit Pandit" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Asit Pandit</h3>
              <p className="text-sm text-green-700 mb-1">Senior Software Engineer, Sahana System Limited</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Ravindra-sinh-vaghela.jpeg" alt="Dr. Ravirajsinh Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Ravirajsinh Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, NFSU</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Rahul-Vaghela.jpeg" alt="Dr. Rahul Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Rahul Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Director, SKIPS University</p>
            </div>

            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="/placeholder-user.jpg" alt="Kinjal Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Kinjal Patel</h3>
              <p className="text-sm text-green-700 mb-1">Associate Data Scientist, Builure</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Krupa-Patel.jpeg" alt="Dr. Krupa Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Krupa Patel</h3>
              <p className="text-sm text-green-700 mb-1">EPIC Educational Program Innovations Center, Ontario, Canada</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Falgun-Rathod.jpeg" alt="Mr. Falgun Rathod" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Falgun Rathod</h3>
              <p className="text-sm text-green-700 mb-1">MD & Founder CyberOctet</p>
            </div>

            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Arjun-Sharma.jpeg" alt="Arjun Sharma" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Arjun Sharma</h3>
              <p className="text-sm text-green-700 mb-1">Founder and CEO of WhoICard</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jaimeel-Shah.jpeg" alt="Dr. Jaimeel Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jaimeel Shah</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Parul University</p>
            </div>
              <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              {/* <img src="/placeholder-user.jpg" alt="Mr. Bhavik Chopra" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" /> */}
              <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Bhavik Chopra</h3>
              <p className="text-sm text-green-700 mb-1">Data Scientist @ MTA, New York</p>
            </div>
          </div>
        </div>

<div className="space-y-6">
  <h2 className="text-2xl font-semibold text-green-700">Organizing Committee</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Member 1 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      {/* <img 
        src="https://via.placeholder.com/128" 
        alt="Mr. Mayuresh Kulkarni" 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" 
      /> */}
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Mayuresh Kulkarni</h3>
      <p className="text-gray-600 text-sm">Assistant Professor, Silver Oak University</p>
    </div>

    {/* Member 2 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      {/* <img 
        src="https://via.placeholder.com/128" 
        alt="Dr. Monali Suthar" 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" 
      /> */}
      <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Monali Suthar</h3>
      <p className="text-gray-600 text-sm">Assistant Professor, COT, Silver Oak University</p>
    </div>

    {/* Member 3 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      {/* <img 
        src="https://via.placeholder.com/128" 
        alt="Mr. Sanket Shah" 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" 
      /> */}
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Sanket Shah</h3>
      <p className="text-gray-600 text-sm">Assistant Professor, Silver Oak University</p>
    </div>

    {/* Member 4 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      {/* <img 
        src="https://via.placeholder.com/128" 
        alt="Mr. Gaurav Tiwari" 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" 
      /> */}
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Gaurav Tiwari</h3>
      <p className="text-gray-600 text-sm">Assistant Professor, Silver Oak University</p>
    </div>

    {/* Member 5 */}
    <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
      {/* <img 
        src="https://via.placeholder.com/128" 
        alt="Mr. Parimal Patel" 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" 
      /> */}
      <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Parimal Patel</h3>
      <p className="text-gray-600 text-sm">Assistant Professor, Silver Oak University</p>
    </div>
  </div>
</div>

        {/* Add more committee sections as needed (e.g., Technical Program Committee, Advisory Committee) */}


      </section>
      <SiteFooter />
    </main>
  )
}
