export type StatusSubPerusahaan = "aktif" | "coming-soon";

export interface SubPerusahaan {
  id: string;
  nama: string;
  lini: string;
  deskripsi: string;
  deskripsiPanjang: string;
  status: StatusSubPerusahaan;
  url: string;
  gambar: string;
  highlight: string[];
}

export interface Nilai {
  icon: string;
  nama: string;
  deskripsi: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface TimelineItem {
  tahun: number;
  judul: string;
  deskripsi: string;
}

export interface TeamMember {
  nama: string;
  jabatan: string;
  foto: string;
  bio: string;
  featured?: boolean;
}

export interface KontakInfo {
  alamat: string;
  email: string;
  telepon: string;
  jam: string;
}

export interface Perusahaan {
  nama: string;
  tagline: string;
  visi: string;
  misi: string[];
  nilai: Nilai[];
  stats: Stat[];
  timeline: TimelineItem[];
  team: TeamMember[];
  kontak: KontakInfo;
}

export interface Sertifikasi {
  nama: string;
  tahun: string;
}

export interface KontakSubjek {
  value: string;
  label: string;
}

export interface Messages {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    beranda: string;
    tentang: string;
    subPerusahaan: string;
    tim: string;
    kontak: string;
    hubungiKami: string;
    bukaMenu: string;
    navigasi: string;
    pilihBahasa: string;
  };
  themeToggle: {
    gantiTema: string;
  };
  footer: {
    deskripsi: string;
    grupp: string;
    perusahaan: string;
    layanan: string;
    kolomPerusahaan: {
      tentangKami: string;
      timKepemimpinan: string;
      hubungiKami: string;
      kebijakanPrivasi: string;
      syaratKetentuan: string;
    };
    kolomLayanan: string[];
    hakCipta: string;
    kebijakanPrivasi: string;
    syaratKetentuan: string;
  };
  hero: {
    badge: string;
    internationalWord: string;
    paragraph: string;
    ctaJelajahi: string;
    ctaKisah: string;
    statTahunBerdiri: string;
    statLiniUsaha: string;
    statPilar: string;
    buildingName: string;
    buildingLocation: string;
    floatingLabel: string;
    floatingValue: string;
    imageAlt: string;
  };
  subPerusahaanSection: {
    eyebrow: string;
    title: string;
    description: string;
    lihatSemua: string;
    errorTitle: string;
    errorDesc: string;
    cobaLagi: string;
  };
  subPerusahaanCards: {
    badgeAktif: string;
    badgeComingSoon: string;
    segeraHadir: string;
    kunjungiWebsite: string;
    dialogTitle: string;
    dialogDesc: string;
    dialogLini: string;
  };
  visiMisi: {
    eyebrow: string;
    title: string;
    misiKami: string;
    visiCaption: string;
  };
  statsSection: {
    eyebrow: string;
    title: string;
    description: string;
    dataNote: string;
  };
  nilaiSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    imageAlt: string;
  };
  tentang: {
    metaTitle: string;
    metaDescription: string;
    intro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    cerita: string[];
    story1Alt: string;
    story2Alt: string;
    buildingLabel: string;
    timeline: {
      eyebrow: string;
      title: string;
    };
    fondasi: {
      eyebrow: string;
      title: string;
      description: string;
    };
    tabNilai: string;
    tabSertifikasi: string;
    badgeLainnya: string;
  };
  subPerusahaanPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    errorTitle: string;
    errorDesc: string;
    cobaLagi: string;
  };
  timPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    pimpinanGrup: string;
    statPelanggan: string;
    statKaryawan: string;
    statLiniUsaha: string;
    fotoAlt: string;
  };
  kontak: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    infoLabels: {
      alamat: string;
      email: string;
      telepon: string;
      jam: string;
    };
    formTitle: string;
    formSubtitle: string;
    namaLabel: string;
    namaPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjekLabel: string;
    subjekPlaceholder: string;
    pesanLabel: string;
    pesanPlaceholder: string;
    errors: {
      namaMin: string;
      emailInvalid: string;
      subjekRequired: string;
      pesanMin: string;
    };
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successDesc: string;
    successButton: string;
    privacyNote: string;
    privacyLink: string;
    toastTitle: string;
    toastDesc: string;
    mapsAddress: string;
    mapsLink: string;
  };
  legal: {
    eyebrow: string;
    updated: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
  terms: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
  notFound: {
    title: string;
    description: string;
    ctaBeranda: string;
    ctaJelajahi: string;
  };
  data: {
    perusahaan: Perusahaan;
    subPerusahaan: SubPerusahaan[];
    sertifikasi: Sertifikasi[];
    kontakSubjek: KontakSubjek[];
  };
}
