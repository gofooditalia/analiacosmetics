"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  en: {
    // Header
    "header.shop": "Shop",
    "header.about": "About",
    "header.contact": "Contact",
    "header.beautyTips": "Beauty Tips",
    "header.signIn": "Sign In",
    "header.myAccount": "My Account",
    "header.orderHistory": "Order History",
    "header.addresses": "Addresses",
    "header.createAccount": "Create Account",
    "header.shopAll": "Shop All",

    // Categories
    "category.face": "Face Care",
    "category.body": "Body Care",
    "category.hair": "Hair Care",
    "category.makeup": "Makeup",
    "category.gifts": "Gift Sets",

    // Homepage
    "hero.title": "Natural Beauty, Naturally Yours",
    "hero.subtitle":
      "Discover the power of nature with our premium collection of organic cosmetics and skincare products, crafted with love in Malta.",
    "hero.cta": "Shop Now",
    "hero.learnMore": "Learn More",

    "featured.title": "Featured Products",
    "featured.subtitle": "Discover our most loved natural beauty essentials",
    "featured.viewAll": "View All Products",

    "about.title": "Why Choose Natural?",
    "about.subtitle": "At Analia Cosmetics, we believe in the power of nature to enhance your natural beauty.",
    "about.natural.title": "100% Natural Ingredients",
    "about.natural.description":
      "All our products are made with carefully selected natural ingredients, free from harmful chemicals.",
    "about.cruelty.title": "Cruelty-Free",
    "about.cruelty.description": "We never test on animals and are committed to ethical beauty practices.",
    "about.sustainable.title": "Sustainable Packaging",
    "about.sustainable.description":
      "Our eco-friendly packaging reflects our commitment to protecting the environment.",
    "about.cta": "Learn More About Us",

    "newsletter.title": "Stay Beautiful",
    "newsletter.subtitle": "Subscribe to our newsletter for beauty tips, exclusive offers, and new product launches.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Thank you for subscribing!",

    // Footer
    "footer.tagline": "Natural beauty products crafted with love in Malta",
    "footer.quickLinks": "Quick Links",
    "footer.customerService": "Customer Service",
    "footer.followUs": "Follow Us",
    "footer.shipping": "Shipping Info",
    "footer.returns": "Returns & Exchanges",
    "footer.faq": "FAQ",
    "footer.support": "Support",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2024 Analia Cosmetics. All rights reserved.",

    // Product
    "product.addToCart": "Add to Cart",
    "product.outOfStock": "Out of Stock",
    "product.inStock": "In Stock",
    "product.quantity": "Quantity:",
    "product.reviews": "reviews",
    "product.description": "Description",
    "product.ingredients": "Ingredients",
    "product.usage": "How to Use",
    "product.benefits": "Key Benefits:",
    "product.naturalIngredients": "Natural Ingredients:",
    "product.howToUse": "How to Use:",
    "product.relatedProducts": "You Might Also Like",
    "product.freeShipping": "Free shipping over €50",
    "product.natural": "100% Natural",
    "product.returns": "30-day returns",

    // Cart
    "cart.title": "Shopping Cart",
    "cart.empty": "Your cart is empty",
    "cart.emptyDescription": "Looks like you haven't added any items to your cart yet.",
    "cart.startShopping": "Start Shopping",
    "cart.items": "items",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Shipping",
    "cart.tax": "Tax",
    "cart.total": "Total",
    "cart.free": "Free",
    "cart.checkout": "Proceed to Checkout",
    "cart.continueShopping": "Continue Shopping",
    "cart.clearCart": "Clear Cart",
    "cart.remove": "Remove",
    "cart.freeShippingNote": "Free shipping on orders over €50",

    // Authentication
    "auth.welcomeBack": "Welcome Back",
    "auth.signInDescription": "Sign in to your account",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.signIn": "Sign In",
    "auth.signingIn": "Signing in...",
    "auth.forgotPassword": "Forgot your password?",
    "auth.noAccount": "Don't have an account?",
    "auth.createAccount": "Create Account",
    "auth.joinFamily": "Join the Analia Cosmetics family",
    "auth.firstName": "First Name",
    "auth.lastName": "Last Name",
    "auth.confirmPassword": "Confirm Password",
    "auth.agreeTerms": "I agree to the Terms & Conditions and Privacy Policy",
    "auth.subscribeNewsletter": "Subscribe to our newsletter for beauty tips and exclusive offers",
    "auth.creatingAccount": "Creating Account...",
    "auth.haveAccount": "Already have an account?",

    // Account
    "account.title": "My Account",
    "account.welcome": "Welcome back",
    "account.signOut": "Sign Out",
    "account.overview": "Overview",
    "account.orders": "Orders",
    "account.addresses": "Addresses",
    "account.profile": "Profile",
    "account.totalOrders": "Total Orders",
    "account.totalSpent": "Total Spent",
    "account.lifetimeValue": "Lifetime value",
    "account.savedAddresses": "Saved addresses",
    "account.recentOrders": "Recent Orders",
    "account.noOrders": "No orders yet",
    "account.orderHistory": "Order History",
    "account.viewDetails": "View Details",
    "account.profileInfo": "Profile Information",
    "account.editProfile": "Edit Profile",
    "account.notProvided": "Not provided",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name",
    "contact.emailAddress": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us how we can help you...",
    "contact.sendButton": "Send Message",
    "contact.sending": "Sending...",
    "contact.messageSent": "Message Sent!",
    "contact.thankYou": "Thank you for contacting us. We'll get back to you within 24 hours.",
    "contact.visitStore": "Visit Our Store",
    "contact.openingHours": "Opening Hours",
    "contact.quickSupport": "Quick Support",
    "contact.callUs": "Call Us",
    "contact.emailUs": "Email Us",
    "contact.urgentMatters": "For urgent matters, please call us directly",
    "contact.findUs": "Find Us",
    "contact.locationDescription": "Located in the heart of St Paul's Bay, Malta",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.close": "Close",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.home": "Home",
    "common.phone": "Phone",
  },
  es: {
    // Header
    "header.shop": "Tienda",
    "header.about": "Acerca de",
    "header.contact": "Contacto",
    "header.beautyTips": "Consejos de Belleza",
    "header.signIn": "Iniciar Sesión",
    "header.myAccount": "Mi Cuenta",
    "header.orderHistory": "Historial de Pedidos",
    "header.addresses": "Direcciones",
    "header.createAccount": "Crear Cuenta",
    "header.shopAll": "Ver Todo",

    // Categories
    "category.face": "Cuidado Facial",
    "category.body": "Cuidado Corporal",
    "category.hair": "Cuidado Capilar",
    "category.makeup": "Maquillaje",
    "category.gifts": "Sets de Regalo",

    // Homepage
    "hero.title": "Belleza Natural, Naturalmente Tuya",
    "hero.subtitle":
      "Descubre el poder de la naturaleza con nuestra colección premium de cosméticos orgánicos y productos para el cuidado de la piel, elaborados con amor en Malta.",
    "hero.cta": "Comprar Ahora",
    "hero.learnMore": "Saber Más",

    "featured.title": "Productos Destacados",
    "featured.subtitle": "Descubre nuestros esenciales de belleza natural más queridos",
    "featured.viewAll": "Ver Todos los Productos",

    "about.title": "¿Por Qué Elegir Natural?",
    "about.subtitle": "En Analia Cosmetics, creemos en el poder de la naturaleza para realzar tu belleza natural.",
    "about.natural.title": "100% Ingredientes Naturales",
    "about.natural.description":
      "Todos nuestros productos están hechos con ingredientes naturales cuidadosamente seleccionados, libres de químicos dañinos.",
    "about.cruelty.title": "Libre de Crueldad",
    "about.cruelty.description": "Nunca probamos en animales y estamos comprometidos con prácticas de belleza éticas.",
    "about.sustainable.title": "Empaque Sostenible",
    "about.sustainable.description":
      "Nuestro empaque ecológico refleja nuestro compromiso con la protección del medio ambiente.",
    "about.cta": "Conoce Más Sobre Nosotros",

    "newsletter.title": "Mantente Bella",
    "newsletter.subtitle":
      "Suscríbete a nuestro boletín para consejos de belleza, ofertas exclusivas y lanzamientos de nuevos productos.",
    "newsletter.placeholder": "Ingresa tu dirección de correo",
    "newsletter.subscribe": "Suscribirse",
    "newsletter.success": "¡Gracias por suscribirte!",

    // Footer
    "footer.tagline": "Productos de belleza natural elaborados con amor en Malta",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.customerService": "Servicio al Cliente",
    "footer.followUs": "Síguenos",
    "footer.shipping": "Info de Envío",
    "footer.returns": "Devoluciones e Intercambios",
    "footer.faq": "Preguntas Frecuentes",
    "footer.support": "Soporte",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.copyright": "© 2024 Analia Cosmetics. Todos los derechos reservados.",

    // Product
    "product.addToCart": "Añadir al Carrito",
    "product.outOfStock": "Agotado",
    "product.inStock": "En Stock",
    "product.quantity": "Cantidad:",
    "product.reviews": "reseñas",
    "product.description": "Descripción",
    "product.ingredients": "Ingredientes",
    "product.usage": "Cómo Usar",
    "product.benefits": "Beneficios Clave:",
    "product.naturalIngredients": "Ingredientes Naturales:",
    "product.howToUse": "Cómo Usar:",
    "product.relatedProducts": "También Te Puede Gustar",
    "product.freeShipping": "Envío gratis en pedidos superiores a €50",
    "product.natural": "100% Natural",
    "product.returns": "Devoluciones de 30 días",

    // Cart
    "cart.title": "Carrito de Compras",
    "cart.empty": "Tu carrito está vacío",
    "cart.emptyDescription": "Parece que aún no has añadido ningún artículo a tu carrito.",
    "cart.startShopping": "Comenzar a Comprar",
    "cart.items": "artículos",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Envío",
    "cart.tax": "Impuesto",
    "cart.total": "Total",
    "cart.free": "Gratis",
    "cart.checkout": "Proceder al Pago",
    "cart.continueShopping": "Continuar Comprando",
    "cart.clearCart": "Vaciar Carrito",
    "cart.remove": "Eliminar",
    "cart.freeShippingNote": "Envío gratis en pedidos superiores a €50",

    // Authentication
    "auth.welcomeBack": "Bienvenida de Vuelta",
    "auth.signInDescription": "Inicia sesión en tu cuenta",
    "auth.email": "Correo Electrónico",
    "auth.password": "Contraseña",
    "auth.signIn": "Iniciar Sesión",
    "auth.signingIn": "Iniciando sesión...",
    "auth.forgotPassword": "¿Olvidaste tu contraseña?",
    "auth.noAccount": "¿No tienes una cuenta?",
    "auth.createAccount": "Crear Cuenta",
    "auth.joinFamily": "Únete a la familia Analia Cosmetics",
    "auth.firstName": "Nombre",
    "auth.lastName": "Apellido",
    "auth.confirmPassword": "Confirmar Contraseña",
    "auth.agreeTerms": "Acepto los Términos y Condiciones y la Política de Privacidad",
    "auth.subscribeNewsletter": "Suscríbete a nuestro boletín para consejos de belleza y ofertas exclusivas",
    "auth.creatingAccount": "Creando Cuenta...",
    "auth.haveAccount": "¿Ya tienes una cuenta?",

    // Account
    "account.title": "Mi Cuenta",
    "account.welcome": "Bienvenida de vuelta",
    "account.signOut": "Cerrar Sesión",
    "account.overview": "Resumen",
    "account.orders": "Pedidos",
    "account.addresses": "Direcciones",
    "account.profile": "Perfil",
    "account.totalOrders": "Total de Pedidos",
    "account.totalSpent": "Total Gastado",
    "account.lifetimeValue": "Valor de por vida",
    "account.savedAddresses": "Direcciones guardadas",
    "account.recentOrders": "Pedidos Recientes",
    "account.noOrders": "Aún no hay pedidos",
    "account.orderHistory": "Historial de Pedidos",
    "account.viewDetails": "Ver Detalles",
    "account.profileInfo": "Información del Perfil",
    "account.editProfile": "Editar Perfil",
    "account.notProvided": "No proporcionado",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.",
    "contact.sendMessage": "Envíanos un Mensaje",
    "contact.fullName": "Nombre Completo",
    "contact.emailAddress": "Dirección de Correo",
    "contact.subject": "Asunto",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos cómo podemos ayudarte...",
    "contact.sendButton": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.messageSent": "¡Mensaje Enviado!",
    "contact.thankYou": "Gracias por contactarnos. Te responderemos dentro de 24 horas.",
    "contact.visitStore": "Visita Nuestra Tienda",
    "contact.openingHours": "Horarios de Apertura",
    "contact.quickSupport": "Soporte Rápido",
    "contact.callUs": "Llámanos",
    "contact.emailUs": "Escríbenos",
    "contact.urgentMatters": "Para asuntos urgentes, por favor llámanos directamente",
    "contact.findUs": "Encuéntranos",
    "contact.locationDescription": "Ubicados en el corazón de St Paul's Bay, Malta",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.close": "Cerrar",
    "common.back": "Atrás",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.home": "Inicio",
    "common.phone": "Teléfono",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("analia-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("analia-language", language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
