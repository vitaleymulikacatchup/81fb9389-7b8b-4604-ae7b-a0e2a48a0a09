"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Building, Building2, HelpCircle, Heart, MapPin, Mountain, Palmtree, Plane, Send, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Destinations", id: "destinations" },
            { name: "Tours", id: "tours" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TravelPro"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Amazing Destinations"
          description="Experience unforgettable adventures with our curated travel packages to the world's most beautiful destinations"
          tag="Travel Adventures"
          tagIcon={Plane}
          buttons={[
            {
              text: "Explore Tours",
              href: "tours"
            },
            {
              text: "View Destinations",
              href: "destinations"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
        />
      </div>

      <div id="destinations" data-section="destinations">
        <FeatureCardTwo
          title="Popular Destinations"
          description="Explore our handpicked destinations that offer unique experiences and unforgettable memories"
          tag="Top Picks"
          tagIcon={MapPin}
          features={[
            {
              title: "Tropical Paradise",
              description: "Experience pristine beaches, crystal clear waters, and luxury resorts in exotic tropical locations",
              icon: Palmtree
            },
            {
              title: "Cultural Heritage",
              description: "Discover ancient temples, historic landmarks, and immerse yourself in rich local traditions",
              icon: Building
            },
            {
              title: "Urban Adventures",
              description: "Explore vibrant cities, modern architecture, and experience the pulse of metropolitan life",
              icon: Building2
            },
            {
              title: "Natural Wonders",
              description: "Witness breathtaking landscapes, majestic mountains, and untouched natural beauty",
              icon: Mountain
            }
          ]}
        />
      </div>

      <div id="tours" data-section="tours">
        <ProductCardOne
          title="Featured Tour Packages"
          description="Carefully crafted travel experiences with everything you need for the perfect getaway"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "bali-adventure",
              name: "Bali Adventure Package",
              price: "From $1,299",
              imageSrc: "https://images.pexels.com/photos/17716409/pexels-photo-17716409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "paris-romance",
              name: "Romantic Paris Getaway",
              price: "From $1,899",
              imageSrc: "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "tokyo-culture",
              name: "Tokyo Cultural Experience",
              price: "From $2,199",
              imageSrc: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "santorini-luxury",
              name: "Santorini Luxury Escape",
              price: "From $2,499",
              imageSrc: "https://images.pexels.com/photos/164435/pexels-photo-164435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Travelers Say"
          description="Real experiences from travelers who have discovered the world with us"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Enthusiast",
              company: "Adventure Seeker",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7235797/pexels-photo-7235797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Photographer",
              company: "Digital Nomad",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Travel Blogger",
              company: "Wanderlust Writer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3889870/pexels-photo-3889870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Business Executive",
              company: "Luxury Traveler",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2790282/pexels-photo-2790282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about booking your perfect travel experience"
          tag="Help"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What's included in the tour packages?",
              content: "Our tour packages typically include accommodation, guided tours, transportation, and select meals. Specific inclusions vary by package and are clearly listed in each tour description."
            },
            {
              id: "2",
              title: "How far in advance should I book?",
              content: "We recommend booking at least 4-6 weeks in advance for popular destinations. This ensures availability and often better pricing. Last-minute bookings may be available but with limited options."
            },
            {
              id: "3",
              title: "What is your cancellation policy?",
              content: "Cancellations made 30+ days before departure receive a full refund minus processing fees. 15-30 days: 50% refund. Less than 15 days: no refund. Travel insurance is highly recommended."
            },
            {
              id: "4",
              title: "Do you offer customized itineraries?",
              content: "Yes! We specialize in creating personalized travel experiences tailored to your preferences, budget, and timeline. Contact our travel specialists to discuss your dream trip."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Send}
          title="Ready for Your Next Adventure?"
          description="Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration delivered to your inbox"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive travel updates and can unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Destinations",
              items: [
                { label: "Asia", href: "destinations" },
                { label: "Europe", href: "destinations" },
                { label: "Americas", href: "destinations" },
                { label: "Africa", href: "destinations" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Tour Packages", href: "tours" },
                { label: "Custom Trips", href: "contact" },
                { label: "Travel Insurance", href: "contact" },
                { label: "Group Travel", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Travel Tips", href: "contact" },
                { label: "Booking Guide", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 TravelPro. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}