import React, { createContext, useContext, useState } from 'react'

const StoryFormContext = createContext()

export const useStoryForm = () => {
  const context = useContext(StoryFormContext)
  if (!context) {
    throw new Error('useStoryForm must be used within StoryFormProvider')
  }
  return context
}

export const StoryFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    step1: '',
    image: '',
    step2: '',
    step3: '',
    step4: '',
    step5: ''
  })

  const updateFormData = (step, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: value
    }))
  }

  const resetFormData = () => {
    setFormData({
      step1: '',
      image: '',
      step2: '',
      step3: '',
      step4: '',
      step5: ''
    })
  }

  return (
    <StoryFormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </StoryFormContext.Provider>
  )
}

