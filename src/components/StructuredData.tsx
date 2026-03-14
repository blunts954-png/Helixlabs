import React from 'react';

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Helix Labs",
    "description": "Premium research-grade peptides and biochemical compounds for laboratory use.",
    "url": "https://helixlabs.example.com",
    "logo": "https://helixlabs.example.com/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Peptide Compounds",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "MOTS-C 10mg",
            "description": "High-purity metabolic research peptide."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "BPC-157 5mg",
            "description": "Recovery research compound."
          }
        }
      ]
    },
    "location": [
      {
        "@type": "MedicalClinic",
        "name": "Helix Pacific Hub",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA"
        }
      },
      {
        "@type": "MedicalClinic",
        "name": "Helix Austin HQ",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Austin",
          "addressRegion": "TX"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
