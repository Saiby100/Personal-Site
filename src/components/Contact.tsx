import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { social, contact } from '../constants/portfolioConfig';
import { gradients, layouts, cards, focus, transitions, text, inputs, backgrounds, accent } from '../constants/styles';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration not found. Please set environment variables.');
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email submission failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: contact.location,
      link: contact.mapUrl,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: social.github,
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: social.linkedin,
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: social.instagram,
    },
  ];

  return (
    <section id="contact" className={layouts.section}>
      <div className={layouts.containerMedium}>
        <div className={layouts.sectionHeader}>
          <h2 className={layouts.heading}>
            <span className={gradients.textAccent}>
              Get In Touch
            </span>
          </h2>
          <p className={`text-xl ${text.muted} max-w-3xl mx-auto`}>
            Want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className={`${text.muted} text-lg leading-relaxed mb-8`}>
                I'm always interested in hearing about cool projects, and meeting fellow developers.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`${gradients.bgAccent} p-3 rounded-lg`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`${text.muted} hover:text-[var(--accent-400)] transition-colors`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={text.muted}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${backgrounds.tertiary} p-3 rounded-lg ${transitions.scaleMedium} hover:bg-[var(--accent-600)]`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className={cards.gradient}>
              <h4 className={`text-lg font-semibold mb-3 ${accent.text[300]}`}>Available for</h4>
              <ul className={`space-y-2 ${text.secondary}`}>
                <li>• Open source collaboration</li>
                <li>• Things</li>
              </ul>
            </div>
          </div>

          <div className={cards.base}>
            <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${text.secondary} mb-2`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${inputs.base} ${focus.ring}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${text.secondary} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${inputs.base} ${focus.ring}`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${text.secondary} mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputs.base} ${focus.ring}`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${text.secondary} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 ${inputs.base} ${focus.ring} resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${gradients.bgAccent} text-white px-6 py-3 rounded-lg font-semibold ${transitions.scaleSmall} flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-400">
                  Failed to send message. Please try emailing me directly at {contact.email}
                </div>
              )}
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
