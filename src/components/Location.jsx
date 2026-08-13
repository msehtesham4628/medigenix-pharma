import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { config } from '../config';

export default function Location() {
  const { address, maps } = config;

  // Format address string for Google Maps
  const mapsSearchQuery = encodeURIComponent(
    `${address.businessName}, ${address.street}, ${address.area}, ${address.circle}, ${address.city}, ${address.state}`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/${mapsSearchQuery}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${maps.latitude},${maps.longitude}&z=15&output=embed`;

  return (
    <section id="location" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-navy leading-tight mb-6">
            Visit {config.businessName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in Bandlaguda, Chandrayangutta, Hyderabad.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Address Card */}
          <div className="space-y-8">
            {/* Main Address */}
            <div className="bg-gradient-to-br from-medical-blue/5 to-pharmacy-green/5 rounded-2xl p-8 border border-medical-blue/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 bg-medical-blue rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-dark-navy">{address.businessName}</p>
                  <p className="text-gray-600 text-sm mt-1">{address.street}</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-700">
                <p>{address.area}</p>
                <p>{address.circle}</p>
                <p className="font-semibold text-dark-navy">
                  {address.city}, {address.state}
                </p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={`tel:${config.phone}`}
                className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-medical-blue transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={20} className="text-medical-blue group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-dark-navy">Phone</span>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-medical-blue transition-colors font-medium">
                  {config.phone}
                </p>
              </a>

              {/* Email */}
              <a
                href={`mailto:${config.email}`}
                className="group p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-medical-blue transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={20} className="text-medical-blue group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-dark-navy">Email</span>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-medical-blue transition-colors font-medium break-all">
                  {config.email}
                </p>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-medical-blue hover:bg-medical-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Directions
                <ExternalLink size={18} />
              </a>
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-medical-blue border-2 border-medical-blue px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] bg-gray-100">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MEDIGENIX PHARMA Location Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Map Note */}
        <div className="mt-8 p-6 bg-medical-blue/5 border border-medical-blue/20 rounded-xl">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">Note:</span> The map location is approximate. For
            precise directions and store hours, please contact us or use your preferred maps
            application.
          </p>
        </div>
      </div>
    </section>
  );
}
