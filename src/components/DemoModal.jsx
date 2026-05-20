import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaInfoCircle } from 'react-icons/fa';

export default function DemoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101]
              bg-white rounded-lg shadow-2xl w-[90vw] max-w-md p-6"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close dialog"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <FaInfoCircle className="w-7 h-7 text-blue-600" />
              </div>
            </div>

            {/* Content */}
            <h2
              id="demo-modal-title"
              className="text-center text-gray-800 font-bold text-base mb-2"
            >
              Demo Notice
            </h2>
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              This is a landing page demo. Interior pages are not included as per task requirement.
            </p>

            {/* Button */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded text-white text-sm font-semibold
                  bg-gradient-to-b from-[#3a7bd5] to-[#1a5bb5]
                  hover:from-[#4a8be5] hover:to-[#2a6bc5]
                  transition-all duration-200 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                OK, Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
