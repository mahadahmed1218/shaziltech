import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Choose Shazil Teach?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the features that make learning enjoyable and effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interactive Content',
                description: 'Engage with multimedia content, quizzes, and interactive exercises that make learning fun.',
                icon: '🎯',
              },
              {
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of experience in their fields.',
                icon: '👨‍🏫',
              },
              {
                title: 'Flexible Learning',
                description: 'Study at your own pace, anywhere, anytime. Access courses on any device.',
                icon: '📱',
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your learning journey with detailed progress reports and analytics.',
                icon: '📊',
              },
              {
                title: 'Community Support',
                description: 'Join a vibrant community of learners and get help when you need it.',
                icon: '🤝',
              },
              {
                title: 'Certification',
                description: 'Earn certificates upon course completion to showcase your new skills.',
                icon: '🏆',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

