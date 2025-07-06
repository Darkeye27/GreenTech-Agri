import { FaLeaf, FaUserFriends, FaRecycle, FaRupeeSign } from "react-icons/fa";

export const metadata = {
  title: 'About us',
  description: 'Learn about the journey, values, and mission of GreenTech Agri - India’s sustainable agriculture partner.',
};

export default function AboutPage() {
    return (
      <div className="bg-white text-[#4E4E4E]">
        {/* Header */}
        <section className="bg-[#E8F5E9] py-20 text-center">
          <h1 className="text-4xl font-bold text-[#2E7D32]">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            A journey rooted in sustainability, innovation, and the future of farming.
          </p>
        </section>
  
        {/* Company Journey */}
        <section className="max-w-5xl mx-auto py-16 px-6 space-y-6">
          <h2 className="text-2xl font-semibold text-[#388E3C] mb-4">From Seeds to Solutions</h2>
          <p>
            GreenTech Agri was born from a simple idea in 2021 — to make agriculture not just smarter,
            but more sustainable. As climate change and resource scarcity continued to challenge
            farmers across India, we saw an opportunity to create a real impact. We began by working
            closely with small-scale farmers, listening to their needs and co-creating solutions that
            truly made a difference.
          </p>
          <p>
            Over time, we expanded our offerings from basic irrigation tools to a full ecosystem of
            smart agri-devices, bio-based fertilizers, and digital farm management systems. What
            started in a 200 sq. ft. office has now grown into a nationwide movement—driven by a team
            of passionate innovators and agri-experts.
          </p>
          <p>
            Today, GreenTech Agri is trusted by hundreds of farms across India. We stand at the
            forefront of agri-tech innovation, continuing our mission to empower every farmer—one seed
            at a time.
          </p>
        </section>
  
        {/* Mission & Values */}
        <section className="bg-[#F1F8E9] py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Our Mission & Values</h2>
    <p className="text-[#4E4E4E] max-w-3xl mx-auto mb-12">
      At GreenTech Agri, we are committed to transforming Indian agriculture through innovation,
      affordability, and eco-conscious solutions tailored for every farmer.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <FaLeaf className="text-[#2E7D32] text-4xl mx-auto mb-4" />
        <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Innovation First</h3>
        <p className="text-sm text-gray-700">
          We invest in sustainable agri-tech solutions that reshape modern farming.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <FaUserFriends className="text-[#2E7D32] text-4xl mx-auto mb-4" />
        <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Farmer-Centric</h3>
        <p className="text-sm text-gray-700">
          Built with deep collaboration and feedback from real Indian farmers.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <FaRecycle className="text-[#2E7D32] text-4xl mx-auto mb-4" />
        <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Eco-Responsibility</h3>
        <p className="text-sm text-gray-700">
          We ensure every product is sustainable and kind to the planet.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <FaRupeeSign className="text-[#2E7D32] text-4xl mx-auto mb-4" />
        <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Affordability</h3>
        <p className="text-sm text-gray-700">
          We believe every farmer deserves access to high-quality tools—without the high cost.
        </p>
      </div>
    </div>
  </div>
</section>
  
        {/* Team Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-12">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Member 1 */}
              <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
                <img
                  src="https://images.generated.photos/1zt-Lw23Phdy1H2m9ZGPbhRsDdKGpQj-rpPyMnBU_-U/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDE1NzMzLmpwZw.jpg"
                  alt="Ravi Patel"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#2E7D32]">Manish Panchal</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
  
              {/* Member 2 */}
              <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
                <img
                  src="https://images.generated.photos/ZYtOC5xwOtU17-GvKrEJWZpRunetrjzilvoc0rO-GLQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxOTY3LmpwZw.jpg"
                  alt="Nisha Verma"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#2E7D32]">Nisha Verma</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
  
              {/* Member 3 */}
              <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
                <img
                  src="https://images.generated.photos/rlex4m8aqoh8PBIMW69rQ3M9MhDiN9FBGtB6kA7YWag/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzEwODE5LmpwZw.jpg"
                  alt="Manish Panchal"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#2E7D32]">Ravi Patel</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  