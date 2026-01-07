"use client"

import { Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

export default function PlanCard({ plan }) {
  const [isHovering, setIsHovering] = useState(false)

  const getStatusColor = (status) => {
    if (status === "Active") {
      return "bg-green-500 text-white"
    }
    return "bg-amber-200 text-amber-900"
  }

  const handleEdit = () => {
    console.log("Edit plan:", plan.id)
  }

  const handleDelete = () => {
    console.log("Delete plan:", plan.id)
  }

  const handleDesigner = () => {
    console.log("Open designer:", plan.id)
  }

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Card Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(plan.status)}`}>
            {plan.status}
          </span>
        </div>
        {isHovering && (
          <div className="flex gap-2 ml-4">
            <button
              onClick={handleEdit}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Edit plan"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              aria-label="Delete plan"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="px-6 py-6 space-y-5">
        {/* Pricing */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-600 text-lg">{plan.priceUnit}</span>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{plan.components} components included</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">Created {plan.createdDate}</span>
          </div>
        </div>

        {/* Description */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-gray-600 text-sm line-clamp-2">{plan.description}</p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 flex gap-3 border-t border-gray-100">
        <button
          onClick={handleEdit}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Edit2 size={16} />
          <span>Edit</span>
        </button>
        <button
          onClick={handleDesigner}
          className="flex-1 px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Designer
        </button>
      </div>
    </div>
  )
}
