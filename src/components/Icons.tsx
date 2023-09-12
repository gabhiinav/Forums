import { LucideProps, MessageSquare, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 64 64">
      <g>
        <path
          d="M34.4 13.5a11 11 0 0 1 12.5.9A11.2 11.2 0 0 0 47 13a11 11 0 0 0-19.9-6.5 11 11 0 0 1 7.3 7z"
          data-name="layer4"
          fill="#854a4a"
        />
        <path
          d="M41 30v-6H17l.8 2.1L31.9 62l12.3-28.1A4 4 0 0 1 41 30z"
          data-name="layer3"
          fill="#f9cb9a"
        />
        <path
          d="M34.4 13.5a11 11 0 1 0-16.6 12.6h.1L17 24h12v-1a10.9 10.9 0 0 1 1.1-4.8 11.1 11.1 0 0 1 4.3-4.7z"
          data-name="layer2"
          fill="#f9f6be"
        />
        <path
          d="M46.9 14.4A11 11 0 0 0 29 23v1h12v6a4 4 0 0 0 3.2 3.9h.8a4 4 0 0 0 4-4V23h2a11 11 0 0 0-4.1-8.6z"
          data-name="layer1"
          fill="#ef9bc2"
        />
        <path
          d="M13 17a11 11 0 0 0 4.8 9.1h.1L17 24h5.1c-3.8-2.5-8.8-8-5.8-14.9A11 11 0 0 0 13 17zm12.6 7H29v-1a10.8 10.8 0 0 1 3.3-7.8c-5.9 1.9-6.7 8.8-6.7 8.8zM43 29.4V24h-1.9v6a4 4 0 0 0 3.2 3.9h.8c-2 .1-2.1-3-2.1-4.5z"
          data-name="opacity"
          fill="#101129"
          opacity=".18"
        />
        <path
          d="M30.1 18.2a10.9 10.9 0 0 0-1 4.8v1h3.8a12.6 12.6 0 0 1 2.5-10.9l-.9.4a11 11 0 0 0-4.4 4.7zM17 24l.9 2.1 14 35.9-8.8-38H17zm24 6v-6h-2.6v7.4c0 4.6 4.9 4.5 4.9 4.5l.9-2A4 4 0 0 1 41 30z"
          data-name="opacity"
          fill="#101129"
          opacity=".18"
        />
        <path
          d="M46.9 14.4A11.2 11.2 0 0 0 47 13a11 11 0 0 0-19.8-6.5M41 24H17.1l.8 2.1L32 62l12.2-28.1"
          data-name="stroke"
          fill="none"
          stroke="#2f446a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M34.5 13.5a11 11 0 1 0-16.6 12.6h.1"
          data-name="stroke"
          fill="none"
          stroke="#2f446a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M41 24v6a4 4 0 0 0 3.2 3.9h.8a4 4 0 0 0 4-4V23h2a11 11 0 0 0-22 0v1"
          data-name="stroke"
          fill="none"
          stroke="#2f446a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  commentReply: MessageSquare,
};
