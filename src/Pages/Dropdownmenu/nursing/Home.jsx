import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaCalendarAlt,
  FaHospital,
  FaPhoneAlt,
  FaProcedures,
  FaUserNurse,
  FaHome,
} from "react-icons/fa";
import { GiMedicinePills, GiHealthNormal } from "react-icons/gi";
import Nurse from "../../../assets/Nurse.jpg"
const Home = () => {
  const navigate = useNavigate();
  const [patientCount, setPatientCount] = useState(500);
  const [nurseCount, setNurseCount] = useState(50);
  const [serviceCount, setServiceCount] = useState(0);

  const navigateToBooking = () => {
    navigate("/booking");
  };

  useEffect(() => {
    // Animate stats counting up
    const animateCount = (target, setter, duration = 1000) => {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateCount(900, setPatientCount);
    animateCount(120, setNurseCount, 1000);
    animateCount(25, setServiceCount, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className=" shadow-sm sticky top-0 z-50 bg-blue-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaHospital className="text-3xl text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-800">
               Nursing
            </h1>
          </div>
          
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Premium <span className="text-blue-600">In-Home Nursing</span>{" "}
              Care
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Compassionate, professional nursing care tailored to your needs.
              Our certified nurses provide exceptional care in the comfort of
              your home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={navigateToBooking}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Visit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative rounded-2xl shadow-blue-300 shadow-2xl overflow-hidden border border-gray-100 hover:scale-101 duration-300">
                <img
                  src={Nurse}
                  alt="Nurse helping elderly patient"
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm">
              <div className="text-5xl text-green-500 font-bold mb-2">
                {patientCount}+
              </div>
              <div className="text-xl font-medium text-blue-500">Patients Served</div>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {nurseCount}+
              </div>
              <div className="text-xl font-medium text-blue-500">Certified Nurses</div>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-xl backdrop-blur-sm">
              <div className="text-5xl font-bold text-green-500 mb-2">
                {serviceCount}+
              </div>
              <div className="text-xl font-medium text-blue-500">Specialized Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Nursing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care solutions designed for your comfort and
              recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHome className="text-4xl mb-4 text-blue-600" />,
                title: "In-Home Care",
                desc: "Full-time or part-time nursing care in your home environment",
              },
              {
                icon: <FaProcedures className="text-4xl mb-4 text-blue-600" />,
                title: "Post-Surgical Care",
                desc: "Specialized care after hospital discharge",
              },
              {
                icon: (
                  <GiMedicinePills className="text-4xl mb-4 text-blue-600" />
                ),
                title: "Medication Management",
                desc: "Proper administration and monitoring of medications",
              },
              {
                icon: <FaUserNurse className="text-4xl mb-4 text-blue-600" />,
                title: "Elderly Care",
                desc: "Dedicated care for senior patients",
              },
              {
                icon: (
                  <GiHealthNormal className="text-4xl mb-4 text-blue-600" />
                ),
                title: "Chronic Condition Management",
                desc: "Ongoing care for long-term health conditions",
              },
              {
                icon: <FaPhoneAlt className="text-4xl mb-4 text-blue-600" />,
                title: "24/7 Emergency Support",
                desc: "Round-the-clock availability for urgent needs",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md  border border-gray-400 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Experience Premium Nursing Care?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn how we can
            support your health journey.
          </p>
          <button
            onClick={navigateToBooking}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Nursing Care Now
          </button>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
