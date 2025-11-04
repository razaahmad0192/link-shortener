// pages/about.js
"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | FitLinks</title>
        <meta
          name="description"
          content="FitLinks is a fast, secure, and modern URL shortener built for individuals and businesses."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* Header */}
          <motion.h1 
            className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About FitLinks
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FitLinks is the ultimate URL shortener designed for simplicity, speed, and efficiency. We make sharing links effortless, tracking them insightful, and managing them secure—all in one platform.
          </motion.p>

          {/* Mission & Vision */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To provide a fast, secure, and reliable platform for individuals and businesses to shorten URLs and track performance with clarity and simplicity.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To become the most trusted URL shortener globally, helping users manage links effortlessly while gaining meaningful insights.
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Why Choose FitLinks?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gradient-to-tr from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast & Simple</h3>
                <p className="text-gray-700">
                  Shorten long URLs in seconds with a clean and intuitive interface.
                </p>
              </div>
              <div className="bg-gradient-to-tr from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Analytics</h3>
                <p className="text-gray-700">
                  Track clicks, locations, and link performance in real-time.
                </p>
              </div>
              <div className="bg-gradient-to-tr from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure & Reliable</h3>
                <p className="text-gray-700">
                  Your links are always accessible, and your data is protected with top-level security.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to shorten your first link?</h2>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white font-semibold px-12 py-4 rounded-full shadow-xl hover:bg-blue-700 hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
