import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"


export default function CommitteePage() {
  return (
  <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }}>
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg mb-6 animate-fade-in">Organizing Committee</h1>


        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">General Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1620591758322.jpeg" alt="Dr. A. Sharma" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Satvik Khara</h3>
              <p className="text-sm text-green-700 mb-1">Dean, Collage of Technology</p>
             
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1668676239088.jpeg" alt="Prof. B. Singh" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Prof. Digant Parmar</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Collage of Technology</p>
             
            </div>
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
              <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
                <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/dr-sagar-patel.jpeg" alt="Prof. S. Gupta" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 transition-all duration-300 hover:border-blue-400" />
                <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sagar Patel</h3>
                <p className="text-sm text-green-700 mb-1">Dean Academics,Silver Oak University</p>
               
              </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jitendra-Bhatia.jpeg" alt="Dr. P. Kumar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jitendra Bhatia</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor,Nirma University</p>
             
            </div>
          </div>
        </div>


        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Technical Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. Chintan Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Chintan Shah</h3>
              <p className="text-sm text-green-700 mb-1">AI Solutions Engineer, Schofields, NSW, Australia</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Sudip-Tanwar.jpeg" alt="Dr. Sudip Tanwar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sudip Tanwar</h3>
              <p className="text-sm text-green-700 mb-1">Professor and HOD, CSE, Nirma University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jaimin-Dave.jpeg" alt="Dr. Jaimin Dave" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jaimin Dave</h3>
              <p className="text-sm text-green-700 mb-1">Principal, COT, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Monali-Suthar.jpeg" alt="Dr. Monali Suthar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Monali Suthar</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, COT, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Premal-Patel.jpeg" alt="Dr. Premal Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Premal Patel</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, COT, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Vimalkumar-Vaghela.jpeg" alt="Dr. Vimalkumar Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Vimalkumar Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, LD College of Engineering</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. Sapan Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Sapan Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Nirma University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. Uttam Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Uttam Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, VGEC, Chandkhela</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Amit-Thakkar.jpeg" alt="Dr. Amit Thakkar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Amit Thakkar</h3>
              <p className="text-sm text-green-700 mb-1">Professor, HEAD (CSE), Charusat University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Neel-Mishra.jpeg" alt="Neel Mishra" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Neel Mishra</h3>
              <p className="text-sm text-green-700 mb-1">Data Scientist, Microsoft</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Parth Modi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Parth Modi</h3>
              <p className="text-sm text-green-700 mb-1">Software Engineer, Google, San Jose, CA, USA</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Kartik-Derasari.jpeg" alt="Kartik Derasari" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Kartik Derasari</h3>
              <p className="text-sm text-green-700 mb-1">Solutions Engineering Lead - Google Cloud & Applied AI</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Ankit-Shah.jpeg" alt="Dr. Ankit Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Ankit Shah</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, Adani University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Nilesh-Vaghela.jpeg" alt="Nilesh Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Nilesh Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">CEO Electromech</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Arpan-Desai.jpeg" alt="Arpan Desai" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Arpan Desai</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, PDEU</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Sachin-Gajjar.jpeg" alt="Sachin Gajjar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Sachin Gajjar</h3>
              <p className="text-sm text-green-700 mb-1">Associate Professor, Nirma University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/sanket-shah.jpeg" alt="Sanket Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Sanket Shah</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/07/mayuresh-sir.png" alt="Mayuresh Kulkarni" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Mayuresh Kulkarni</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/07/gaurav-sir.png" alt="Gaurav Tiwari" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Gaurav Tiwari</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jay-Dave.jpeg" alt="Dr. Jay Dave" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jay Dave</h3>
              <p className="text-sm text-green-700 mb-1">Professor & Dean, Rai University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Harshal-Trivedi.jpeg" alt="Harshal Trivedi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Harshal Trivedi</h3>
              <p className="text-sm text-green-700 mb-1">Founder & CEO TuskerAI</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Vishal-Modi.jpeg" alt="Vishal Modi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Vishal Modi</h3>
              <p className="text-sm text-green-700 mb-1">CTO Softvan</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Asit-Pandit.jpeg" alt="Asit Pandit" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Asit Pandit</h3>
              <p className="text-sm text-green-700 mb-1">Senior Software Engineer, Sahana System Limited</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Ravindra-sinh-vaghela.jpeg" alt="Dr. Ravirajsinh Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Ravirajsinh Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, NFSU</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Rahul-Vaghela.jpeg" alt="Dr. Rahul Vaghela" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Rahul Vaghela</h3>
              <p className="text-sm text-green-700 mb-1">Director, SKIPS University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Hemal-Patel.jpeg" alt="Dr. Hemal Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Hemal Patel</h3>
              <p className="text-sm text-green-700 mb-1">Principal, SOCCA, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. Anuradha Desai" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Anuradha Desai</h3>
              <p className="text-sm text-green-700 mb-1">Head, Diploma, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Hetal-Joshiyara.jpeg" alt="Dr. Hetal Joshiyara" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Hetal Joshiyara</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, LD College of Engineering</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Kinjal Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Kinjal Patel</h3>
              <p className="text-sm text-green-700 mb-1">Associate Data Scientist, Builure</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Krupa-Patel.jpeg" alt="Dr. Krupa Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Krupa Patel</h3>
              <p className="text-sm text-green-700 mb-1">EPIC Educational Program Innovations Center, Ontario, Canada</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Falgun-Rathod.jpeg" alt="Mr. Falgun Rathod" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Mr. Falgun Rathod</h3>
              <p className="text-sm text-green-700 mb-1">MD & Founder CyberOctet</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jalpa-Shah.jpeg" alt="Dr. Jalpa Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jalpa Shah</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr-Manish-sing.jpeg" alt="Dr. Manish Singh" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Manish Singh</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Silver Oak University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. Hardik Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Hardik Patel</h3>
              <p className="text-sm text-green-700 mb-1">Head, Kadi Sarva Vidhyalaya Gandhinagar</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Anand-Sutariya.jpeg" alt="Dr. Anand Sutariya" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Anand Sutariya</h3>
              <p className="text-sm text-green-700 mb-1">Head & Assistant Professor, CSE Dept. at VSITR, Kadi</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Nitin-Kumar-Pandya.jpeg" alt="Dr. Nitin Kumar Pandya" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Nitin Kumar Pandya</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Sankalchand Patel University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Arjun-Sharma.jpeg" alt="Arjun Sharma" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Arjun Sharma</h3>
              <p className="text-sm text-green-700 mb-1">Founder and CEO of WhoICard</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Jaimeel-Shah.jpeg" alt="Dr. Jaimeel Shah" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Jaimeel Shah</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Parul University</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="http://ieee.socet.edu.in/wp-content/uploads/2025/10/Dr.-Tapaskumar-Maithi.jpeg" alt="Dr. Tapaskumar Maithi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Tapaskumar Maithi</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, DAIICT</p>
            </div>
          </div>
        </div>


        {/* Add more committee sections as needed (e.g., Technical Program Committee, Advisory Committee) */}


      </section>
      <SiteFooter />
    </main>
  )
}
