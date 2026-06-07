import {
  Building2, ShieldCheck, Scale, ThumbsUp, FileSearch, FileText,
  ArrowLeftRight, Layers, Users, FileBadge, TrendingUp, Landmark,
  Briefcase, ClipboardCheck, HeartHandshake, type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "Corporate Secretarial" | "Investments" | "Legal Representation";

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  category: ServiceCategory;
}

export const services: Service[] = [
  { title: "Corporate Secretarial Services", desc: "End-to-end statutory compliance under the Companies Act.", icon: Building2, category: "Corporate Secretarial" },
  { title: "Audit 'N' Assurance", desc: "Independent secretarial audits and assurance reports.", icon: ShieldCheck, category: "Corporate Secretarial" },
  { title: "Insolvency & Bankruptcy", desc: "Advisory and representation under the IBC framework.", icon: Scale, category: "Legal Representation" },
  { title: "Regulatory Approvals & Representation", desc: "Approvals before MCA, RBI, SEBI, NCLT and ROC.", icon: ThumbsUp, category: "Legal Representation" },
  { title: "Corporate Governance", desc: "Board-level governance frameworks for listed and unlisted entities.", icon: FileSearch, category: "Corporate Secretarial" },
  { title: "Legal Due Diligence & Transaction Documents", desc: "Diligence, drafting and negotiation across transactions.", icon: FileText, category: "Legal Representation" },
  { title: "Compliance under Foreign Exchange Laws", desc: "FEMA, ODI, FDI, ECB and cross-border structuring.", icon: ArrowLeftRight, category: "Investments" },
  { title: "Joint Ventures, Mergers & Acquisitions", desc: "Structuring, scheme drafting and NCLT execution.", icon: Layers, category: "Investments" },
  { title: "Employee Stock Based Compensation", desc: "ESOP design, SAR, RSU plans and ongoing administration.", icon: Users, category: "Corporate Secretarial" },
  { title: "Intellectual Property Rights", desc: "Trademark, copyright and patent filings.", icon: FileBadge, category: "Legal Representation" },
  { title: "Advisory on Capital Raising", desc: "Private placements, rights issues, IPO readiness.", icon: TrendingUp, category: "Investments" },
  { title: "Services to Lending Institutions", desc: "Charge creation, satisfaction and lender diligence.", icon: Landmark, category: "Legal Representation" },
  { title: "Establishment & Employment Compliances", desc: "Labour codes, shops and establishment registrations.", icon: Briefcase, category: "Corporate Secretarial" },
  { title: "Compliance Management Services", desc: "Tech-enabled compliance calendars and dashboards.", icon: ClipboardCheck, category: "Corporate Secretarial" },
  { title: "Services to Non-profit Organisations", desc: "Section 8 incorporations, FCRA, 12A and 80G.", icon: HeartHandshake, category: "Legal Representation" },
];

export const industries = [
  "Hospitality & Leisure", "Financial Institutions & Venture Capital", "Education",
  "Energy", "Information Technology", "Health & Personal Care",
  "Agriculture & Plantations", "Media & Entertainment", "Retail & Franchising",
  "Transportation & Infrastructure", "Insurance", "Manufacturing & Industrial",
  "Telecom & Broadcasting", "Advanced Options", "Defence",
];