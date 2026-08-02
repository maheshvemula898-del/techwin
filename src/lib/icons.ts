import {
  Award, Book, BrainCircuit, Briefcase, Building2, Calendar, CheckCircle,
  CheckCircle2, Clock, Cloud, CloudCog, Code, Code2, DollarSign, Download,
  Factory, FileText, Globe, GraduationCap, Handshake, Heart, HelpCircle,
  Landmark, Layers, Mail, MapPin, MessageCircle, Network, Phone, RadioTower, ServerCog, Settings,
  ShieldCheck, ShoppingBag, TrendingUp, Trophy, Users, Video, Workflow, Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award, Book, BrainCircuit, Briefcase, Building2, Calendar, CheckCircle,
  CheckCircle2, Clock, Cloud, CloudCog, Code, Code2, DollarSign, Download,
  Factory, FileText, Globe, GraduationCap, Handshake, Heart, HelpCircle,
  Landmark, Layers, Mail, MapPin, MessageCircle, Network, Phone, RadioTower, ServerCog, Settings,
  ShieldCheck, ShoppingBag, TrendingUp, Trophy, Users, Video, Workflow, Zap,
};

export const getLucideIcon = (name?: string): LucideIcon =>
  (name && iconMap[name]) || CheckCircle2;
