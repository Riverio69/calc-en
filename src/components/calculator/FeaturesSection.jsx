import React from 'react';
import { motion } from 'framer-motion';

export const FEATURES_BY_PROJECT = {
  mobile: [
    { id: 'auth', label: 'Auth & User Accounts', price: 1500 },
    { id: 'social_login', label: 'Social Login (Google, Apple)', price: 1000 },
    { id: 'payment', label: 'Payment Integration', price: 2500 },
    { id: 'push', label: 'Push Notifications', price: 1500 },
    { id: 'chat', label: 'Chat / Messaging', price: 3000 },
    { id: 'geo', label: 'Geolocation / Maps', price: 1800 },
    { id: 'offline', label: 'Offline Mode', price: 3000 },
    { id: 'admin', label: 'Admin Dashboard', price: 4000 },
    { id: 'api', label: 'API Integrations', price: 1000 },
    { id: 'publish', label: 'App Store Publishing', price: 800 },
  ],
  web: [
    { id: 'pages', label: 'Extra Pages', price: 200 },
    { id: 'animations', label: 'Animations / Interactions', price: 1000 },
    { id: 'multilang', label: 'Multilingual Support', price: 2000 },
    { id: 'seo', label: 'SEO Optimization', price: 1500 },
    { id: 'crm', label: 'CRM Integration', price: 1500 },
    { id: 'forms', label: 'Forms / Quizzes', price: 1000 },
  ],
  ecommerce: [
    { id: 'payment', label: 'Payment System', price: 2500 },
    { id: 'delivery', label: 'Shipping / Logistics', price: 2000 },
    { id: 'cabinet', label: 'User Account Area', price: 2500 },
    { id: 'filters', label: 'Filters & Search', price: 2000 },
    { id: 'erp', label: 'ERP / Warehouse Integration', price: 3500 },
    { id: 'multilang', label: 'Multilingual / Multi-currency', price: 2000 },
    { id: 'subscriptions', label: 'Subscriptions (Recurring)', price: 3000 },
    { id: 'reviews', label: 'Reviews & Ratings', price: 1000 },
    { id: 'recommendations', label: 'Product Recommendations', price: 2000 },
  ],
  platform: [
    { id: 'roles', label: 'Registration + User Roles', price: 3000 },
    { id: 'payments', label: 'Payments Between Users', price: 4000 },
    { id: 'commission', label: 'Platform Commission', price: 1500 },
    { id: 'chat', label: 'Chat / Communication', price: 3000 },
    { id: 'reviews', label: 'Reviews & Ratings', price: 1500 },
    { id: 'search', label: 'Search & Filters', price: 2500 },
    { id: 'admin', label: 'Admin Dashboard', price: 5000 },
    { id: 'moderation', label: 'Content Moderation', price: 2500 },
    { id: 'notifications', label: 'Notifications (Email / Push)', price: 2500 },
  ],
  saas: [
    { id: 'subscriptions', label: 'Subscription System', price: 3000 },
    { id: 'plans', label: 'Pricing Plans', price: 1500 },
    { id: 'teams', label: 'Team Accounts', price: 3000 },
    { id: 'api', label: 'Public API for Clients', price: 5000 },
    { id: 'integrations', label: 'Integrations (CRM, Slack, etc.)', price: 1500 },
    { id: 'dashboards', label: 'Dashboards / Analytics', price: 4000 },
    { id: 'security', label: 'Security (2FA, Roles)', price: 4000 },
    { id: 'architecture', label: 'Scalable Architecture', price: 5000 },
    { id: 'monitoring', label: 'Monitoring / Logs', price: 1500 },
  ],
};

export default function FeaturesSection({ projectType, selected, onToggle }) {
  const features = projectType ? FEATURES_BY_PROJECT[projectType.id] || [] : [];

  if (!projectType) {
    return (
      <div className="rounded-2xl bg-black border border-[#2a2a2a] p-6 md:p-8">
        <h3 className="text-[#a3e635] font-mono text-xs tracking-[0.2em] uppercase mb-4">
          02 — Add-ons
        </h3>
        <p className="text-[#555] text-sm">Select a project type to see available add-ons.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-black border border-[#2a2a2a] p-6 md:p-8">
      <h3 className="text-[#a3e635] font-mono text-xs tracking-[0.2em] uppercase mb-6">
        02 — Add-ons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => {
          const isActive = selected.some(f => f.id === feature.id);
          return (
            <motion.button
              key={feature.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => onToggle(feature)}
              className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200 border text-left ${
                isActive
                  ? 'bg-[#a3e635]/10 border-[#a3e635]'
                  : 'bg-[#111] border-[#2a2a2a] hover:border-[#a3e635]/40'
              }`}
            >
              <span className="text-sm font-medium text-white">{feature.label}</span>
              <span className={`text-xs font-mono ml-3 shrink-0 ${isActive ? 'text-[#a3e635]' : 'text-[#555]'}`}>
                +€{feature.price.toLocaleString()}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}