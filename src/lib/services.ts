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
  {
    title: "Corporate Secretarial Services",
    desc: "End-to-end statutory compliance under the Companies Act 2013 — from incorporation and ROC filings to board management and annual returns for listed and unlisted entities.",
    icon: Building2,
    category: "Corporate Secretarial",
  },
  {
    title: "Audit & Assurance",
    desc: "Independent secretarial audits and assurance reports that certify the compliance health of an entity, identifying gaps and recommending remediation strategies.",
    icon: ShieldCheck,
    category: "Corporate Secretarial",
  },
  {
    title: "Insolvency & Bankruptcy",
    desc: "Advisory and representation under the Insolvency and Bankruptcy Code (IBC) framework, including proceedings before NCLT, NCLAT and assistance to resolution professionals.",
    icon: Scale,
    category: "Legal Representation",
  },
  {
    title: "Regulatory Approvals & Representation",
    desc: "End-to-end assistance for approvals and representations before the MCA, RBI, SEBI, NCLT and regional ROC offices across India.",
    icon: ThumbsUp,
    category: "Legal Representation",
  },
  {
    title: "Corporate Governance",
    desc: "Board-level governance frameworks, policy drafting, and committee structuring for listed, unlisted, and public-sector entities compliant with SEBI LODR and the Companies Act.",
    icon: FileSearch,
    category: "Corporate Secretarial",
  },
  {
    title: "Legal Due Diligence & Transaction Documents",
    desc: "Comprehensive legal diligence, drafting and negotiation of transaction documents including SHA, SSA, term sheets, and ancillary agreements for M&A and PE transactions.",
    icon: FileText,
    category: "Legal Representation",
  },
  {
    title: "Compliance under Foreign Exchange Laws",
    desc: "Advisory on FEMA, ODI, FDI, ECB and cross-border structuring; assistance with RBI filings and reporting for inbound and outbound transactions.",
    icon: ArrowLeftRight,
    category: "Investments",
  },
  {
    title: "Joint Ventures, Mergers, Amalgamations & Acquisitions",
    desc: "Structuring inorganic growth through joint ventures, mergers, amalgamations and acquisitions — covering scheme drafting, NCLT petitions, and regulatory approvals.",
    icon: Layers,
    category: "Investments",
  },
  {
    title: "Employee Stock Based Compensation",
    desc: "ESOP design, SAR, RSU and phantom stock plans — covering plan rules, trust deed drafting, SEBI filings, employee communications, and ongoing administration.",
    icon: Users,
    category: "Corporate Secretarial",
  },
  {
    title: "Intellectual Property Rights",
    desc: "End-to-end trademark, copyright and patent advisory — from search and filing to opposition proceedings and portfolio management across classes and jurisdictions.",
    icon: FileBadge,
    category: "Legal Representation",
  },
  {
    title: "Advisory on Capital Raising",
    desc: "Strategic advisory on private placements, rights issues, preferential allotments and IPO readiness — covering structuring, documentation and regulatory clearances.",
    icon: TrendingUp,
    category: "Investments",
  },
  {
    title: "Services to Lending Institutions",
    desc: "Search and status reports, charge creation and satisfaction, lender due diligence, and representation before ROC for banks and non-banking financial institutions.",
    icon: Landmark,
    category: "Legal Representation",
  },
  {
    title: "Establishment & Employment Compliances",
    desc: "Analysis of current compliance status, audit of labour law records, and advisory on obligations under the four Labour Codes, Shops & Establishment Acts and PF/ESI.",
    icon: Briefcase,
    category: "Corporate Secretarial",
  },
  {
    title: "Compliance Management Services",
    desc: "Technology-enabled compliance calendars, dashboards, and periodic monitoring — ensuring no statutory deadline is missed across multiple entities and regulators.",
    icon: ClipboardCheck,
    category: "Corporate Secretarial",
  },
  {
    title: "Services to Non-profit Organisations",
    desc: "Incorporation and ongoing compliances for Section 8 companies, societies, and trusts — covering FCRA registration, 12A and 80G certifications, and CSR advisory.",
    icon: HeartHandshake,
    category: "Legal Representation",
  },
];

export const industries = [
  "Hospitality & Leisure",
  "Financial Institutions & Venture Capital",
  "Education",
  "Energy",
  "Information Technology",
  "Health & Personal Care",
  "Agriculture & Plantations",
  "Media & Entertainment",
  "Retail & Franchising",
  "Transportation & Infrastructure",
  "Insurance",
  "Manufacturing & Industrial",
  "Telecom & Broadcasting",
  "Advanced Technology",
  "Defence",
];