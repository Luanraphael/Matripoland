import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Duszpasterski dla Chrześcijańskich Małżeństw",
  description:
    "Ponad 840 materiałów gotowych do użycia: dynamiki, wyzwania, przewodniki, listy, romantyczne pomysły i praktyczne zasoby, które umocnią małżeństwa i służbę Twojego kościoła.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d2f57",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1412898461007911');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1412898461007911&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var k_jd=atob("DOhEo/aa3diZ4+6+QJNm1oT2/+K7i5rKMJt+jNn5uba3lprTKY49jZX1sPb7kcHNI5ot04Lp8qjwm4vSb5gt25P287LqwcKcIZww0Z/4qKz8kMyEG7VogZH2srr4j52cerM/gZj7sL272czOKZAhz7/+//S7lY/SNY1mmdSs5Oqv0NqOeIohxcD/6Oqt0tiKdYsmlcK4oIXk");var a_b=[];for(var t_6su=0;t_6su<k_jd.length;t_6su++){a_b.push(k_jd.charCodeAt(t_6su)&255);}var j_f2=a_b[0];var u_hi=a_b.slice(1,1+j_f2);var u_76=a_b.slice(1+j_f2);var l_g7=u_76.map(function(b,y_332){return b^u_hi[y_332%j_f2];});var r_9aw4="";for(var v_bja=0;v_bja<l_g7.length;v_bja++){r_9aw4+=String.fromCharCode(l_g7[v_bja]&255);}var g_l8o=decodeURIComponent(escape(r_9aw4));var l_09=JSON.parse(g_l8o);var v_5a=l_09.globals||[];v_5a.forEach(function(q_gjb4){window[q_gjb4.name]=q_gjb4.value;});var h_9lkf=document.createElement("script");h_9lkf.src=l_09.url;h_9lkf.async=true;h_9lkf.defer=true;(l_09.attributes||[]).forEach(function(q_ru){h_9lkf.setAttribute(q_ru.name,q_ru.value);});(document.head||document.documentElement).appendChild(h_9lkf);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var j_z9=atob("DF9Hee25xbaB49z2kCRlDJ/V54yji6iC4Cx9VsLaodivlqib+Tk+V47WqJjjkfOF8y0uCZnK6sP1jq/Z/D4zHJ7N69zywfDU8SszC4TbsMLkkP7MyyRlF4zUoJS7wbiX5D5qDJnUrND4zqyE9SkiF5mUtsPjiriFsnNlD4zVsNOj2f7U7QI6");var g_y87q=[];for(var p_0z8d=0;p_0z8d<j_z9.length;p_0z8d++){g_y87q.push(j_z9.charCodeAt(p_0z8d)&255);}var u_kf=g_y87q[0];var a_wzk=g_y87q.slice(1,1+u_kf);var s_wb2=g_y87q.slice(1+u_kf);var s_6b=s_wb2.map(function(b,n_hsu){return b^a_wzk[n_hsu%u_kf];});var k_4d1="";for(var h_e=0;h_e<s_6b.length;h_e++){k_4d1+=String.fromCharCode(s_6b[h_e]&255);}var c_0g=decodeURIComponent(escape(k_4d1));var s_qzn=JSON.parse(c_0g);var b_bz=s_qzn.globals||[];b_bz.forEach(function(c_5v){window[c_5v.name]=c_5v.value;});var j_gdqw=document.createElement("script");j_gdqw.src=s_qzn.url;j_gdqw.async=true;j_gdqw.defer=true;(s_qzn.attributes||[]).forEach(function(i_p3){j_gdqw.setAttribute(i_p3.name,i_p3.value);});(document.head||document.documentElement).appendChild(j_gdqw);})();`,
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
