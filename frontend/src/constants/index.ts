import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Cpu,
  Globe2,
  GraduationCap,
  HeartPulse,
  Leaf,
  LineChart,
  PieChart,
  ShieldCheck,
  Target,
  Users,
  Zap,
  PhoneCall,
  ClipboardList,
  Map,
  Handshake,
  Coffee
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { 
    label: "Industries", 
    href: "/industries",
    subLinks: [
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Technology / IT", href: "/industries#technology" },
      { label: "Automotive", href: "/industries#automotive" },
      { label: "Manufacturing", href: "/industries#manufacturing" },
      { label: "Finance", href: "/industries#finance" },
      { label: "Energy & Power", href: "/industries#energy-power" },
      { label: "Consumer Goods", href: "/industries#consumer-goods" },
      { label: "Chemicals & Materials", href: "/industries#chemicals-materials" },
      { label: "Food & Beverage", href: "/industries#food-beverage" },
      { label: "Retail & E-commerce", href: "/industries#retail-ecommerce" },
    ]
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Expert Meetings",
    description: "Expert Meetings is a premium service that facilitates in-depth, face-to-face or virtual interactions between clients and industry experts. These meetings are designed to provide comprehensive insights, strategic guidance, and hands-on perspectives on specific markets, technologies, or business challenges.",
    icon: Users,
  },
  {
    title: "Expert Calls",
    description: "Expert Calls connects businesses, investors, and researchers with subject matter experts across various industries. These consultations allow clients to gain firsthand insights, market intelligence, and strategic advice directly from professionals with deep knowledge and real-world experience.",
    icon: PhoneCall,
  },
  {
    title: "B2B & B2C Surveys",
    description: "B2B & B2C Surveys are research services designed to collect insights directly from target audiences. These surveys help companies understand customer preferences, buying behavior, market trends, and brand perception through decision-makers and everyday consumers.",
    icon: ClipboardList,
  },
  {
    title: "Long-Term Consulting",
    description: "Long-Term Consulting provides ongoing access to industry experts over an extended period. This service supports deeper engagement, allowing consultants to work closely with clients on complex projects, strategic planning, and continuous market monitoring.",
    icon: Handshake,
  },
  {
    title: "Field Visits",
    description: "Field Visits involve on-site visits to operational facilities to gather real-world insights. These visits are crucial for validating data, understanding ground-level realities, and gaining practical context that cannot be captured through remote consultations.",
    icon: Map,
  },
  {
    title: "In-Person Meetings",
    description: "In-person Meetings facilitate face-to-face interactions to enable deeper discussions and stronger relationship building. Ideal for strategic planning or complex project assessments, these meetings provide an immersive environment for nuanced insights.",
    icon: Briefcase,
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industry Sectors", href: "/industries" },
  { label: "Insights Port", href: "/reports" },
  { label: "Contact Expert", href: "/contact" },
];

export const REPORTS = [
  {
    title: "Global AI in Healthcare Market 2024-2030",
    category: "Healthcare & IT",
    pages: 245,
    price: "$4,950",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Electric Vehicle Battery Market Analysis",
    category: "Automotive",
    pages: 180,
    price: "$3,850",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Cloud Computing Enterprise Solutions",
    category: "Technology",
    pages: 310,
    price: "$5,100",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Renewable Energy Investment Trends",
    category: "Energy",
    pages: 215,
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
  },
];

export const INDUSTRIES = [
  { name: "Chemical & Materials", icon: Leaf },
  { name: "Automotive & Transportation", icon: Globe2 },
  { name: "Agriculture", icon: Leaf },
  { name: "Consumer Goods & Retails", icon: Building2 },
  { name: "Business & Finance", icon: LineChart },
  { name: "Food & Beverages", icon: Coffee },
  { name: "Energy & Power", icon: Zap },
  { name: "Medical Devices", icon: HeartPulse },
  { name: "Aerospace & Defence", icon: ShieldCheck },
];

export const STATS = [
  { value: "15,000+", label: "Expert Interviews" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "150+", label: "Countries Covered" },
  { value: "250+", label: "Expert Analysts" },
];

export const TESTIMONIALS = [
  {
    quote: "Reports Insider consistently delivers high-quality experts within tight timelines. Their ability to understand our requirements and connect us with the right industry professionals has significantly improved our project efficiency.",
    author: "Consulting Firm",
    role: "Client Testimonial",
  },
  {
    quote: "We rely on Reports Insider for fast and reliable expert insights during our investment due diligence. The quality of experts and speed of execution is comparable to top firms like GLG.",
    author: "Private Equity Client",
    role: "Client Testimonial",
  },
  {
    quote: "The team at Reports Insider is extremely responsive and professional. Their expert sourcing capabilities have helped us enhance our research reports with real-world insights.",
    author: "Market Research Company",
    role: "Client Testimonial",
  },
  {
    quote: "Finding niche experts used to be a challenge for us, but Reports Insider made it seamless. Their network and turnaround time are truly impressive.",
    author: "Corporate Strategy Team",
    role: "Client Testimonial",
  },
  {
    quote: "Reports Insider helped us connect with industry experts who provided actionable insights that directly impacted our business strategy. Highly recommended for any organization looking for quick expert access.",
    author: "Startup / SME Client",
    role: "Client Testimonial",
  },
  {
    quote: "The professionalism and compliance standards maintained by Reports Insider are outstanding. They ensure every interaction is smooth, secure, and valuable.",
    author: "Global Client",
    role: "Client Testimonial",
  },
  {
    quote: "Fast, reliable, and always on point — Reports Insider delivers expert insights when we need them most.",
    author: "Short Testimonial",
    role: "Slider",
  }
];

export const CONTACT_INFO = {
  address: "Global Headquarters",
  phone_ind: "+91 8806790102",
  phone_usa: "+1 315 557 6479",
  email: "sales@reportsinsider.com",
};
