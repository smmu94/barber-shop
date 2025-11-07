export interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface TestimonialProps {
  id: number;
  punctuation: number;
  name: string;
  feedback: string;
}

interface FooterInfoItem {
  icon?: string;
  url?: string;
  text?: string;
}

export interface FooterInfoSection {
  title: string;
  items: FooterInfoItem[];
  isSocial?: boolean;
}