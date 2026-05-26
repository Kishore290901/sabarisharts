const WHATSAPP_NUMBER = "919080683319";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serviceEnquiryMessage(serviceName: string, category: string): string {
  return `Hi Sabarish Arts! I'm interested in your ${serviceName} service (${category}). Please share details and pricing.`;
}
