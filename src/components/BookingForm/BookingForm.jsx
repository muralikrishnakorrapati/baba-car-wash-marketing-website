'use client';

import { useState } from 'react';
import {
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Car,
  Package,
} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './BookingForm.module.css';

const serviceOptions = [
  {
    category: 'One-Time Services',
    options: [
      {
        value: 'sedan-onetime',
        label: 'Sedan Car (Internal & External - One Time) - AED 35',
        price: 35,
      },
      {
        value: '4x4-onetime',
        label: '4x4 Car (Internal & External - One Time) - AED 45',
        price: 45,
      },
      { value: 'onetime-wash', label: 'One Time Wash - AED 20', price: 20 },
    ],
  },
  {
    category: 'Sedan Car Packages',
    options: [
      { value: 'sedan-weekly', label: 'Once A Week Wash - AED 60', price: 60 },
      { value: 'sedan-twice', label: 'Twice A Week Wash - AED 80', price: 80 },
      {
        value: 'sedan-thrice',
        label: 'Thrice A Week Wash - AED 100',
        price: 100,
      },
      { value: 'sedan-daily', label: 'Daily Wash - AED 150', price: 150 },
    ],
  },
  {
    category: '4x4 Car Packages',
    options: [
      { value: '4x4-weekly', label: 'Once A Week Wash - AED 80', price: 80 },
      { value: '4x4-twice', label: 'Twice A Week Wash - AED 100', price: 100 },
      {
        value: '4x4-thrice',
        label: 'Thrice A Week Wash - AED 120',
        price: 120,
      },
      { value: '4x4-daily', label: 'Daily Wash - AED 170', price: 170 },
    ],
  },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    email: '',
    mobile: '',
    alternativeMobile: '',
    address: '',
    parkingCarNumber: '',
    service: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number is invalid';
    }
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.parkingCarNumber)
      newErrors.parkingCarNumber = 'Parking & Car Number is required';
    if (!formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Booking submitted successfully! We will contact you shortly.');
      setFormData({
        date: '',
        name: '',
        email: '',
        mobile: '',
        alternativeMobile: '',
        address: '',
        parkingCarNumber: '',
        service: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      className={styles.formWrapper}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.formHeader}>
        <span className={styles.subtitle}>Get In Touch</span>
        <h2 className={styles.title}>Book An Appointment Now</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          {/* Date */}
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>
              <Calendar size={18} />
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.date ? styles.inputError : ''
              }`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>

          {/* Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              <User size={18} />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.name ? styles.inputError : ''
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              <Mail size={18} />
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.email ? styles.inputError : ''
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          {/* Mobile Number */}
          <div className={styles.formGroup}>
            <label htmlFor="mobile" className={styles.label}>
              <Phone size={18} />
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.mobile ? styles.inputError : ''
              }`}
              placeholder="+971 XX XXX XXXX"
            />
            {errors.mobile && (
              <span className={styles.error}>{errors.mobile}</span>
            )}
          </div>

          {/* Alternative Mobile Number */}
          <div className={styles.formGroup}>
            <label htmlFor="alternativeMobile" className={styles.label}>
              <Phone size={18} />
              Alternative Mobile Number
            </label>
            <input
              type="tel"
              id="alternativeMobile"
              name="alternativeMobile"
              value={formData.alternativeMobile}
              onChange={handleChange}
              className={styles.input}
              placeholder="+971 XX XXX XXXX (Optional)"
            />
          </div>

          {/* Address */}
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              <MapPin size={18} />
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.address ? styles.inputError : ''
              }`}
              placeholder="Enter your complete address"
            />
            {errors.address && (
              <span className={styles.error}>{errors.address}</span>
            )}
          </div>

          {/* Parking & Car Number */}
          <div className={styles.formGroup}>
            <label htmlFor="parkingCarNumber" className={styles.label}>
              <Car size={18} />
              Parking & Car Number
            </label>
            <input
              type="text"
              id="parkingCarNumber"
              name="parkingCarNumber"
              value={formData.parkingCarNumber}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.parkingCarNumber ? styles.inputError : ''
              }`}
              placeholder="e.g., Building A, Parking 123"
            />
            {errors.parkingCarNumber && (
              <span className={styles.error}>{errors.parkingCarNumber}</span>
            )}
          </div>

          {/* Select Service */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="service" className={styles.label}>
              <Package size={18} />
              Select The Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${styles.select} ${
                errors.service ? styles.inputError : ''
              }`}
            >
              <option value="">--Select--</option>
              {serviceOptions.map((category, idx) => (
                <optgroup key={idx} label={category.category}>
                  {category.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {errors.service && (
              <span className={styles.error}>{errors.service}</span>
            )}
          </div>
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
    </motion.div>
  );
}
