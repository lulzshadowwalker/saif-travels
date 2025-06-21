import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// This page only exists to redirect to the default locale
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
