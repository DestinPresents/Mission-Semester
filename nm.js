/* ==========================================================
   nm.js - Numericals panel (BTEUP 1st Semester)
   Physics-I: 50 सवाल | Chemistry-I: 30 सवाल
   हर सवाल: ch (अध्याय), q (सवाल), a (उत्तर), s (हल)
   ========================================================== */
(function () {
  "use strict";

  const DATA = {
    physics: [
      /* Units & Dimensions (4) */
      { ch: "Units & Dimensions", q: "दाब (Pressure) का विमीय सूत्र (dimensional formula) निकालिए। (P = F/A)", a: "[ML⁻¹T⁻²]", s: "F → [MLT⁻²], A → [L²]\nP = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]" },
      { ch: "Units & Dimensions", q: "जाँचिए कि सूत्र s = ut + ½at² विमीय रूप से सही है या नहीं।", a: "हाँ, सूत्र विमीय रूप से सही है", s: "ut → [LT⁻¹][T] = [L]\nat² → [LT⁻²][T²] = [L]\nदोनों पद [L] हैं, अतः s भी [L] है।" },
      { ch: "Units & Dimensions", q: "72 km/h को m/s में बदलिए।", a: "20 m/s", s: "1 km/h = 5/18 m/s\n72 × 5/18 = 20 m/s" },
      { ch: "Units & Dimensions", q: "जल का घनत्व 1000 kg/m³ है। इसे g/cm³ में बदलिए।", a: "1 g/cm³", s: "1000 kg/m³ = 1000 × 1000 g / (100 × 100 × 100 cm³)\n= 10⁶ g / 10⁶ cm³ = 1 g/cm³" },

      /* Vectors & Motion (9) */
      { ch: "Vectors & Motion", q: "सदिश A = 3î + 4ĵ का परिमाण और x-अक्ष से कोण ज्ञात कीजिए।", a: "|A| = 5 इकाई, θ ≈ 53.13°", s: "|A| = √(3² + 4²) = 5\ntan θ = 4/3 ⇒ θ ≈ 53.13°" },
      { ch: "Vectors & Motion", q: "90° पर लगे दो बल 3 N और 4 N हैं। परिणामी बल और 3 N से बना कोण ज्ञात कीजिए।", a: "R = 5 N, कोण ≈ 53.13°", s: "R = √(3² + 4²) = 5 N\ntan α = 4/3 ⇒ α ≈ 53.13°" },
      { ch: "Vectors & Motion", q: "120° पर लगे दो बल 6 N और 6 N हैं। परिणामी बल ज्ञात कीजिए।", a: "6 N", s: "R = √(P² + Q² + 2PQ cos θ)\n= √(36 + 36 + 72 × (−0.5)) = √36 = 6 N" },
      { ch: "Vectors & Motion", q: "कार 5 s में विराम से 20 m/s की चाल पकड़ती है। एकसमान त्वरण ज्ञात कीजिए।", a: "4 m/s²", s: "a = (v − u)/t = (20 − 0)/5 = 4 m/s²" },
      { ch: "Vectors & Motion", q: "कोई गेंद 20 m/s की चाल से सीधे ऊपर फेंकी जाती है (g = 10 m/s²)। अधिकतम ऊँचाई और कुल उड़ान-समय ज्ञात कीजिए।", a: "h = 20 m, कुल समय = 4 s", s: "h = u²/2g = 400/20 = 20 m\nऊपर जाने का समय = u/g = 2 s\nकुल समय = 2 × 2 = 4 s" },
      { ch: "Vectors & Motion", q: "कोई वस्तु विराम से a = 2 m/s² से गति करती है। पाँचवें सेकंड में तय दूरी ज्ञात कीजिए।", a: "9 m", s: "nवें सेकंड में दूरी: sₙ = u + a(2n − 1)/2\ns₅ = 0 + 2 × 9/2 = 9 m" },
      { ch: "Vectors & Motion", q: "20 m/s की चाल से 30° पर फेंका गया प्रक्षेप्य (g = 10 m/s²) कितनी दूरी (परास) पर गिरेगा?", a: "≈ 34.6 m", s: "R = u² sin 2θ / g = 400 × sin 60° / 10\n= 40 × 0.866 ≈ 34.6 m" },
      { ch: "Vectors & Motion", q: "कार A की चाल 20 m/s और कार B की चाल 15 m/s है, दोनों पूर्व दिशा में। A के सापेक्ष B का आपेक्षिक वेग ज्ञात कीजिए।", a: "5 m/s पश्चिम दिशा में", s: "v_BA = v_B − v_A = 15 − 20 = −5 m/s\nऋणात्मक चिह्न: B, A के सापेक्ष पश्चिम की ओर जा रही है" },
      { ch: "Vectors & Motion", q: "कोई व्यक्ति 40 km 30 km/h से और फिर 60 km 60 km/h से चलता है। औसत चाल ज्ञात कीजिए।", a: "≈ 42.86 km/h", s: "t₁ = 40/30 = 4/3 h, t₂ = 60/60 = 1 h\nकुल दूरी = 100 km, कुल समय = 7/3 h\nऔसत चाल = 100 ÷ (7/3) ≈ 42.86 km/h" },

      /* Laws of Motion & Friction (8) */
      { ch: "Laws of Motion & Friction", q: "10 kg द्रव्यमान पर 3 m/s² का त्वरण उत्पन्न करने के लिए आवश्यक बल ज्ञात कीजिए।", a: "30 N", s: "F = ma = 10 × 3 = 30 N" },
      { ch: "Laws of Motion & Friction", q: "5 kg की वस्तु पर 50 N बल लगता है। त्वरण ज्ञात कीजिए और विराम से 30 m/s तक पहुँचने का समय निकालिए।", a: "a = 10 m/s², t = 3 s", s: "a = F/m = 50/5 = 10 m/s²\nt = v/a = 30/10 = 3 s" },
      { ch: "Laws of Motion & Friction", q: "10 kg की वस्तु खुरदरी सतह पर है, μ = 0.3 और g = 10 m/s²। इसे एकसमान चाल से खींचने के लिए आवश्यक बल ज्ञात कीजिए।", a: "30 N", s: "घर्षण बल f = μN = 0.3 × 10 × 10 = 30 N\nएकसमान चाल में लगाया बल = 30 N" },
      { ch: "Laws of Motion & Friction", q: "60 kg का व्यक्ति लिफ्ट में खड़ा है जो 2 m/s² से ऊपर जा रही है (g = 10 m/s²)। उसका आभासी भार ज्ञात कीजिए।", a: "720 N", s: "N = m(g + a) = 60 × (10 + 2) = 720 N" },
      { ch: "Laws of Motion & Friction", q: "0.2 kg की गेंद 10 m/s से दीवार से टकराकर उसी चाल से लौटती है। आवेग और यदि संपर्क समय 0.01 s हो तो औसत बल ज्ञात कीजिए।", a: "आवेग = 4 kg·m/s, औसत बल = 400 N", s: "Δp = m(v − u) = 0.2 × [10 − (−10)] = 4 kg·m/s\nF = Δp/Δt = 4/0.01 = 400 N" },
      { ch: "Laws of Motion & Friction", q: "2 kg की बंदूक से 0.02 kg की गोली 300 m/s से दागी जाती है। बंदूक का प्रतिक्षेप वेग ज्ञात कीजिए। (बंदूक का द्रव्यमान 4 kg मानें)", a: "1.5 m/s (विपरीत दिशा में)", s: "संवेग संरक्षण: m₁v₁ = m₂v₂\nv = (0.02 × 300)/4 = 1.5 m/s" },
      { ch: "Laws of Motion & Friction", q: "चिकने (घर्षणरहित) 30° नत समतल पर वस्तु फिसल रही है (g = 10 m/s²)। उसका त्वरण ज्ञात कीजिए।", a: "5 m/s²", s: "a = g sin θ = 10 × sin 30° = 10 × 0.5 = 5 m/s²" },
      { ch: "Laws of Motion & Friction", q: "किसी खुरदरे नत समतल का घर्षण गुणांक μ = 1/√3 है। विराम कोण (angle of repose) ज्ञात कीजिए।", a: "30°", s: "विराम कोण के लिए tan θ = μ\ntan θ = 1/√3 ⇒ θ = 30°" },

      /* Work, Energy & Power (6) */
      { ch: "Work, Energy & Power", q: "50 N का बल 60° कोण पर लगाकर वस्तु को 4 m विस्थापित किया जाता है। किया गया कार्य ज्ञात कीजिए।", a: "100 J", s: "W = F s cos θ = 50 × 4 × cos 60° = 50 × 4 × 0.5 = 100 J" },
      { ch: "Work, Energy & Power", q: "2 kg द्रव्यमान की वस्तु 5 m/s से चल रही है। उसकी गतिज ऊर्जा ज्ञात कीजिए।", a: "25 J", s: "KE = ½mv² = ½ × 2 × 25 = 25 J" },
      { ch: "Work, Energy & Power", q: "100 kg का भार 10 m ऊँचाई तक 20 s में उठाया जाता है (g = 10 m/s²)। शक्ति ज्ञात कीजिए।", a: "500 W", s: "W = mgh = 100 × 10 × 10 = 10,000 J\nP = W/t = 10,000/20 = 500 W" },
      { ch: "Work, Energy & Power", q: "5 kg की वस्तु 8 m ऊँचाई पर है। उसकी स्थितिज ऊर्जा ज्ञात कीजिए (g = 10 m/s²)।", a: "400 J", s: "PE = mgh = 5 × 10 × 8 = 400 J" },
      { ch: "Work, Energy & Power", q: "20 m ऊँचाई से गिराई गई वस्तु भूमि पर किस चाल से पहुँचेगी? (g = 10 m/s², वायु प्रतिरोध नगण्य)", a: "20 m/s", s: "ऊर्जा संरक्षण: mgh = ½mv²\nv = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s" },
      { ch: "Work, Energy & Power", q: "एक मोटर को 1000 W निवेशित शक्ति दी जाती है और निर्गत शक्ति 800 W है। मोटर की दक्षता ज्ञात कीजिए।", a: "80%", s: "η = (Output/Input) × 100 = (800/1000) × 100 = 80%" },

      /* Circular Motion & Gravitation (6) */
      { ch: "Circular Motion & Gravitation", q: "2 kg द्रव्यमान 2.5 m त्रिज्या के वृत्त में 5 m/s की चाल से घूम रहा है। अभिकेंद्र बल ज्ञात कीजिए।", a: "20 N", s: "F = mv²/r = 2 × 25 / 2.5 = 20 N" },
      { ch: "Circular Motion & Gravitation", q: "कोई पहिया 60 rpm से घूम रहा है। कोणीय वेग ज्ञात कीजिए।", a: "ω = 2π rad/s ≈ 6.28 rad/s", s: "60 rpm = 1 rps\nω = 2πn = 2π × 1 ≈ 6.28 rad/s" },
      { ch: "Circular Motion & Gravitation", q: "पृथ्वी की सतह पर गुरुत्वीय त्वरण g है। पृथ्वी की त्रिज्या R की ऊँचाई (h = R) पर g का मान ज्ञात कीजिए।", a: "g/4", s: "g′ = g (R/(R + h))²\nh = R ⇒ g′ = g (R/2R)² = g/4" },
      { ch: "Circular Motion & Gravitation", q: "पृथ्वी के लिए पलायन वेग ज्ञात कीजिए। (R = 6.4 × 10⁶ m, g = 9.8 m/s²)", a: "≈ 11.2 km/s", s: "v_e = √(2gR) = √(2 × 9.8 × 6.4 × 10⁶)\n= √(1.25 × 10⁸) ≈ 1.12 × 10⁴ m/s ≈ 11.2 km/s" },
      { ch: "Circular Motion & Gravitation", q: "70 kg का व्यक्ति चंद्रमा पर है जहाँ g = 1.6 m/s² है। उसका भार ज्ञात कीजिए।", a: "112 N", s: "W = mg = 70 × 1.6 = 112 N\n(द्रव्यमान सभी जगह समान रहता है, भार बदलता है)" },
      { ch: "Circular Motion & Gravitation", q: "पृथ्वी की सतह के बहुत पास (निम्न कक्षा) में उपग्रह की कक्षीय चाल ज्ञात कीजिए। (g = 9.8 m/s², R = 6.4 × 10⁶ m)", a: "≈ 7.92 km/s", s: "v = √(gR) = √(9.8 × 6.4 × 10⁶)\n= √(6.27 × 10⁷) ≈ 7920 m/s ≈ 7.92 km/s" },

      /* Heat & Thermal Expansion (6) */
      { ch: "Heat & Thermal Expansion", q: "2 kg पानी का तापमान 20°C से 80°C तक बढ़ाने के लिए आवश्यक ऊष्मा ज्ञात कीजिए। (c = 4200 J/kg°C)", a: "5.04 × 10⁵ J", s: "Q = mcΔT = 2 × 4200 × (80 − 20) = 5.04 × 10⁵ J" },
      { ch: "Heat & Thermal Expansion", q: "0.5 kg बर्फ (0°C) को पूरी तरह पिघलाने के लिए आवश्यक ऊष्मा ज्ञात कीजिए। (L = 3.36 × 10⁵ J/kg)", a: "1.68 × 10⁵ J", s: "Q = mL = 0.5 × 3.36 × 10⁵ = 1.68 × 10⁵ J" },
      { ch: "Heat & Thermal Expansion", q: "100°F को सेल्सियस में बदलिए।", a: "≈ 37.8°C", s: "C = (F − 32) × 5/9 = 68 × 5/9 ≈ 37.8°C" },
      { ch: "Heat & Thermal Expansion", q: "2 m लंबी छड़ का तापमान 100°C बढ़ाया जाता है। यदि α = 12 × 10⁻⁶ /°C हो, तो लंबाई में वृद्धि ज्ञात कीजिए।", a: "2.4 mm", s: "ΔL = L α ΔT = 2 × 12 × 10⁻⁶ × 100 = 2.4 × 10⁻³ m = 2.4 mm" },
      { ch: "Heat & Thermal Expansion", q: "100 g जल (80°C) को 100 g जल (20°C) में मिलाया जाता है। अंतिम साम्य तापमान ज्ञात कीजिए। (ऊष्मा हानि नगण्य)", a: "50°C", s: "गर्म जल की हानि = ठंडे जल का लाभ\nm(80 − T) = m(T − 20)\n80 − T = T − 20 ⇒ T = 50°C" },
      { ch: "Heat & Thermal Expansion", q: "एक कार्नो इंजन का गर्म स्रोत 500 K और ठंडा स्रोत 300 K पर है। इसकी दक्षता ज्ञात कीजिए।", a: "40%", s: "η = 1 − T₂/T₁ = 1 − 300/500 = 0.4 = 40%" },

      /* Elasticity & Surface Tension (5) */
      { ch: "Elasticity & Surface Tension", q: "1 mm² अनुप्रस्थ काट वाले तार पर 100 N बल लगाया गया है। प्रतिबल (stress) ज्ञात कीजिए।", a: "1 × 10⁸ N/m²", s: "प्रतिबल = F/A = 100 / (1 × 10⁻⁶) = 1 × 10⁸ N/m²" },
      { ch: "Elasticity & Surface Tension", q: "किसी पदार्थ का प्रतिबल 2 × 10⁸ Pa और विकृति (strain) 0.001 है। यंग गुणांक (Y) ज्ञात कीजिए।", a: "2 × 10¹¹ Pa", s: "Y = प्रतिबल / विकृति = 2 × 10⁸ / 10⁻³ = 2 × 10¹¹ Pa" },
      { ch: "Elasticity & Surface Tension", q: "किसी स्प्रिंग पर 10 N बल लगाने से वह 0.05 m खिंचती है। स्प्रिंग नियतांक k ज्ञात कीजिए।", a: "200 N/m", s: "F = kx ⇒ k = F/x = 10/0.05 = 200 N/m" },
      { ch: "Elasticity & Surface Tension", q: "0.5 mm त्रिज्या की केशनली में जल (T = 0.072 N/m) ऊपर चढ़ता है। ऊर्ध्वगामी ऊँचाई ज्ञात कीजिए। (ρ = 1000 kg/m³, g = 9.8 m/s², θ = 0°)", a: "≈ 2.94 cm", s: "h = 2T cos θ / (r ρ g)\n= (2 × 0.072) / (5 × 10⁻⁴ × 1000 × 9.8)\n= 0.144 / 4.9 ≈ 0.0294 m ≈ 2.94 cm" },
      { ch: "Elasticity & Surface Tension", q: "साबुन के बुलबुले (दो पृष्ठ) की त्रिज्या 1 cm और पृष्ठ तनाव 0.03 N/m है। बुलबुले के भीतर अतिरिक्त दाब ज्ञात कीजिए।", a: "12 Pa", s: "साबुन बुलबुले के लिए ΔP = 4T/r\n= 4 × 0.03 / 0.01 = 12 Pa" },

      /* Simple Harmonic Motion (6) */
      { ch: "Simple Harmonic Motion", q: "1 m लंबे सरल लोलक का आवर्तकाल ज्ञात कीजिए। (g = 9.8 m/s²)", a: "≈ 2.01 s", s: "T = 2π√(L/g) = 2π√(1/9.8) ≈ 2π × 0.319 ≈ 2.01 s" },
      { ch: "Simple Harmonic Motion", q: "2 kg द्रव्यमान और 200 N/m स्प्रिंग नियतांक वाले निकाय का आवर्तकाल ज्ञात कीजिए।", a: "≈ 0.628 s", s: "T = 2π√(m/k) = 2π√(2/200) = 2π × 0.1 ≈ 0.628 s" },
      { ch: "Simple Harmonic Motion", q: "पिछले सवाल के निकाय की आवृत्ति (frequency) ज्ञात कीजिए।", a: "≈ 1.59 Hz", s: "f = 1/T = 1/0.628 ≈ 1.59 Hz" },
      { ch: "Simple Harmonic Motion", q: "एक SHM में आयाम A = 0.1 m और कोणीय आवृत्ति ω = 10 rad/s है। अधिकतम वेग ज्ञात कीजिए।", a: "1 m/s", s: "v_max = Aω = 0.1 × 10 = 1 m/s" },
      { ch: "Simple Harmonic Motion", q: "SHM में x = A sin ωt है, जहाँ A = 5 cm और ω = π rad/s है। t = 0.5 s पर विस्थापन ज्ञात कीजिए।", a: "5 cm", s: "x = 5 sin(π × 0.5) = 5 sin(π/2) = 5 cm" },
      { ch: "Simple Harmonic Motion", q: "k = 100 N/m स्प्रिंग का आयाम 0.2 m है। कुल यांत्रिक ऊर्जा ज्ञात कीजिए।", a: "2 J", s: "E = ½kA² = ½ × 100 × (0.2)² = ½ × 100 × 0.04 = 2 J" }
    ],

    chemistry: [
      /* Atomic Structure (5) */
      { ch: "Atomic Structure", q: "परमाणु क्रमांक 17 और द्रव्यमान संख्या 35 वाले तत्व में न्यूट्रॉन और इलेक्ट्रॉन की संख्या ज्ञात कीजिए।", a: "न्यूट्रॉन = 18, इलेक्ट्रॉन = 17", s: "न्यूट्रॉन = A − Z = 35 − 17 = 18\nउदासीन परमाणु में इलेक्ट्रॉन = Z = 17" },
      { ch: "Atomic Structure", q: "लोहा (Fe, Z = 26) का इलेक्ट्रॉनिक विन्यास लिखिए।", a: "[Ar] 3d⁶ 4s²", s: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶\nसंक्षिप्त रूप: [Ar] 3d⁶ 4s²" },
      { ch: "Atomic Structure", q: "क्लोरीन के दो समस्थानिक ³⁵Cl (75%) और ³⁷Cl (25%) हैं। औसत परमाणु द्रव्यमान ज्ञात कीजिए।", a: "35.5 u", s: "औसत = (35 × 75 + 37 × 25)/100\n= (2625 + 925)/100 = 35.5 u" },
      { ch: "Atomic Structure", q: "सोडियम आयन Na⁺ (Z = 11) में इलेक्ट्रॉनों की संख्या ज्ञात कीजिए।", a: "10", s: "Na में 11 इलेक्ट्रॉन हैं, Na⁺ बनाने में 1 इलेक्ट्रॉन खोता है\nअतः Na⁺ में इलेक्ट्रॉन = 10" },
      { ch: "Atomic Structure", q: "n = 3 कोश में अधिकतम इलेक्ट्रॉनों की संख्या ज्ञात कीजिए।", a: "18", s: "अधिकतम इलेक्ट्रॉन = 2n² = 2 × 9 = 18" },

      /* Periodic Table & Bonding (5) */
      { ch: "Periodic Table & Bonding", q: "ऑक्सीजन अणु (O₂) की बंध कोटि (bond order) ज्ञात कीजिए। (MOT के अनुसार)", a: "2", s: "O₂ में कुल 16 इलेक्ट्रॉन; बंधन कक्षकों में 10, प्रतिबंधन कक्षकों में 6\nBond order = (10 − 6)/2 = 2" },
      { ch: "Periodic Table & Bonding", q: "कार्बन डाइऑक्साइड (CO₂) में कुल संयोजकता इलेक्ट्रॉनों की संख्या ज्ञात कीजिए।", a: "16", s: "C के 4 + O के 6 × 2 = 4 + 12 = 16" },
      { ch: "Periodic Table & Bonding", q: "मीथेन (CH₄) में कार्बन का संकरण (hybridisation) और बंध कोण ज्ञात कीजिए।", a: "sp³, बंध कोण ≈ 109.5°", s: "C के 4 संयोजक इलेक्ट्रॉन 4 σ बंध बनाते हैं\nअतः संकरण sp³ और आदर्श चतुष्फलकीय बंध कोण 109.5°" },
      { ch: "Periodic Table & Bonding", q: "H₂O अणु में ऑक्सीजन पर कितने एकल इलेक्ट्रॉन युग्म (lone pairs) हैं?", a: "2", s: "O के 6 संयोजक इलेक्ट्रॉन\n2 बंधों में 2 इलेक्ट्रॉन लगते हैं, शेष 4 ⇒ 2 एकल युग्म" },
      { ch: "Periodic Table & Bonding", q: "Mg (संयोजकता 2) और Cl (संयोजकता 1) से बने आयनिक यौगिक का सूत्र लिखिए।", a: "MgCl₂", s: "Mg²⁺ (+2) और Cl⁻ (−1)\nसंतुलन के लिए 1 Mg²⁺ के साथ 2 Cl⁻ ⇒ MgCl₂" },

      /* Mole Concept & Stoichiometry (6) */
      { ch: "Mole Concept & Stoichiometry", q: "36 g जल (H₂O) में मोलों की संख्या ज्ञात कीजिए। (H = 1, O = 16)", a: "2 mol", s: "मोलर द्रव्यमान H₂O = 2 + 16 = 18 g/mol\nमोल = 36/18 = 2 mol" },
      { ch: "Mole Concept & Stoichiometry", q: "4 g NaOH में मोलों की संख्या ज्ञात कीजिए। (Na = 23, O = 16, H = 1)", a: "0.1 mol", s: "मोलर द्रव्यमान NaOH = 23 + 16 + 1 = 40 g/mol\nमोल = 4/40 = 0.1 mol" },
      { ch: "Mole Concept & Stoichiometry", q: "2H₂ + O₂ → 2H₂O में 4 g H₂ और 16 g O₂ मिलाए गए। बने जल का द्रव्यमान ज्ञात कीजिए। (सीमांत अभिकर्मक पहचानिए)", a: "18 g (O₂ सीमांत अभिकर्मक है)", s: "H₂ के मोल = 4/2 = 2; O₂ के मोल = 16/32 = 0.5\n2 mol H₂ के लिए 1 mol O₂ चाहिए, उपलब्ध 0.5 mol ⇒ O₂ सीमांत है\n0.5 mol O₂ → 1 mol H₂O = 18 g" },
      { ch: "Mole Concept & Stoichiometry", q: "CaCO₃ में Ca, C और O का प्रतिशत संघटन ज्ञात कीजिए। (Ca = 40, C = 12, O = 16)", a: "Ca: 40%, C: 12%, O: 48%", s: "मोलर द्रव्यमान = 40 + 12 + 48 = 100\nCa = 40%, C = 12%, O = 48%" },
      { ch: "Mole Concept & Stoichiometry", q: "किसी यौगिक में C = 40%, H = 6.67% और O = 53.33% है। मूलानुपाती सूत्र (empirical formula) ज्ञात कीजिए।", a: "CH₂O", s: "मोल अनुपात: C = 40/12 = 3.33, H = 6.67/1 = 6.67, O = 53.33/16 = 3.33\nसरलतम अनुपात 1 : 2 : 1 ⇒ CH₂O" },
      { ch: "Mole Concept & Stoichiometry", q: "10 g CaCO₃ को गरम करने पर CaCO₃ → CaO + CO₂ अभिक्रिया होती है। बनी CO₂ का द्रव्यमान ज्ञात कीजिए।", a: "4.4 g", s: "CaCO₃ के मोल = 10/100 = 0.1 mol\nअनुपात 1:1 ⇒ CO₂ = 0.1 mol\nद्रव्यमान = 0.1 × 44 = 4.4 g" },

      /* Solutions (5) */
      { ch: "Solutions", q: "500 mL विलयन में 5.85 g NaCl घुला है। मोलरता ज्ञात कीजिए। (NaCl का मोलर द्रव्यमान = 58.5 g/mol)", a: "0.2 M", s: "NaCl के मोल = 5.85/58.5 = 0.1 mol\nM = 0.1/0.5 L = 0.2 M" },
      { ch: "Solutions", q: "100 mL के 2 M HCl को 400 mL तक तनु किया जाता है। नई मोलरता ज्ञात कीजिए।", a: "0.5 M", s: "M₁V₁ = M₂V₂\n2 × 100 = M₂ × 400 ⇒ M₂ = 0.5 M" },
      { ch: "Solutions", q: "250 g जल में 10 g NaOH घुला है। मोललता (molality) ज्ञात कीजिए। (NaOH = 40 g/mol)", a: "1 m", s: "NaOH के मोल = 10/40 = 0.25 mol\nमोललता = 0.25 mol / 0.25 kg = 1 m" },
      { ch: "Solutions", q: "85 g जल में 15 g लवण घुला है। विलयन का द्रव्यमान प्रतिशत ज्ञात कीजिए।", a: "15%", s: "कुल विलयन द्रव्यमान = 85 + 15 = 100 g\nmass % = (15/100) × 100 = 15%" },
      { ch: "Solutions", q: "0.5 M H₂SO₄ विलयन की नार्मलता (normality) ज्ञात कीजिए।", a: "1 N", s: "H₂SO₄ का n-factor = 2\nN = M × n-factor = 0.5 × 2 = 1 N" },

      /* Acids, Bases & pH (5) */
      { ch: "Acids, Bases & pH", q: "0.01 M HCl विलयन का pH ज्ञात कीजिए। (प्रबल अम्ल, पूर्ण वियोजन)", a: "2", s: "[H⁺] = 10⁻² M\npH = −log(10⁻²) = 2" },
      { ch: "Acids, Bases & pH", q: "0.001 M NaOH विलयन का pH ज्ञात कीजिए।", a: "11", s: "[OH⁻] = 10⁻³ M ⇒ pOH = 3\npH = 14 − 3 = 11" },
      { ch: "Acids, Bases & pH", q: "0.01 M CH₃COOH का pH ज्ञात कीजिए। (Kₐ = 1.8 × 10⁻⁵)", a: "≈ 3.37", s: "दुर्बल अम्ल: [H⁺] = √(Kₐ × C) = √(1.8 × 10⁻⁵ × 0.01)\n= √(1.8 × 10⁻⁷) ≈ 4.24 × 10⁻⁴ M\npH = −log(4.24 × 10⁻⁴) ≈ 3.37" },
      { ch: "Acids, Bases & pH", q: "50 mL 0.2 M HCl को 50 mL 0.2 M NaOH से पूर्णतः उदासीन किया जाता है। मिश्रण का pH और बना लवण बताइए।", a: "pH = 7, लवण = NaCl", s: "HCl के मोल = 0.2 × 0.05 = 0.01; NaOH के मोल = 0.01\nप्रबल अम्ल + प्रबल क्षार ⇒ लवण NaCl, pH = 7" },
      { ch: "Acids, Bases & pH", q: "कोई विलयन का pH 4 है। उसमें [OH⁻] की सांद्रता ज्ञात कीजिए।", a: "10⁻¹⁰ M", s: "[H⁺] = 10⁻⁴ M\n[H⁺][OH⁻] = 10⁻¹⁴ ⇒ [OH⁻] = 10⁻¹⁰ M" },

      /* Gas Laws (4) */
      { ch: "Gas Laws", q: "किसी गैस का दाब 2 atm और आयतन 5 L है। स्थिर तापमान पर आयतन 10 L करने पर दाब ज्ञात कीजिए।", a: "1 atm", s: "बॉयल का नियम: P₁V₁ = P₂V₂\n2 × 5 = P₂ × 10 ⇒ P₂ = 1 atm" },
      { ch: "Gas Laws", q: "2 atm दाब, 10 L आयतन और 300 K तापमान पर गैस के मोल ज्ञात कीजिए। (R = 0.0821 L·atm/mol·K)", a: "≈ 0.81 mol", s: "PV = nRT ⇒ n = PV/RT\nn = (2 × 10)/(0.0821 × 300) = 20/24.63 ≈ 0.81 mol" },
      { ch: "Gas Laws", q: "गैस का आयतन 300 K पर 2 L है। स्थिर दाब पर तापमान 600 K करने पर नया आयतन ज्ञात कीजिए।", a: "4 L", s: "चार्ल्स का नियम: V₁/T₁ = V₂/T₂\n2/300 = V₂/600 ⇒ V₂ = 4 L" },
      { ch: "Gas Laws", q: "STP पर CO₂ (मोलर द्रव्यमान 44 g/mol) का घनत्व ज्ञात कीजिए। (STP पर मोलर आयतन = 22.4 L)", a: "≈ 1.96 g/L", s: "घनत्व = मोलर द्रव्यमान / मोलर आयतन\n= 44 / 22.4 ≈ 1.96 g/L" }
    ]
  };

  /* ---------- Build the panel ---------- */
  const overlay = document.createElement("div");
  overlay.id = "nmOverlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <section class="nm-panel" role="dialog" aria-modal="true" aria-labelledby="nmTitle">
      <div class="nm-head">
        <div>
          <h2 id="nmTitle">न्यूमेरिकल्स</h2>
          <p>Physics-I और Chemistry-I के हल सहित सवाल</p>
        </div>
        <button type="button" id="nmClose" aria-label="बंद करें">×</button>
      </div>
      <div class="nm-tabs" role="tablist">
        <button class="nm-tab active" data-subject="physics" role="tab">Physics-I (50)</button>
        <button class="nm-tab" data-subject="chemistry" role="tab">Chemistry-I (30)</button>
      </div>
      <div class="nm-toolbar">
        <input type="search" id="nmSearch" placeholder="सवाल खोजें (जैसे: सदिश, pH, मोल...)" aria-label="खोजें">
        <select id="nmChapter" aria-label="अध्याय चुनें"></select>
        <div class="nm-actions">
          <button type="button" class="nm-btn ghost" id="nmShowAll">सभी हल दिखाएँ</button>
          <button type="button" class="nm-btn ghost" id="nmHideAll">सभी हल छिपाएँ</button>
          <button type="button" class="nm-btn" id="nmPrint">प्रिंट</button>
        </div>
      </div>
      <p class="nm-info" id="nmInfo"></p>
      <div class="nm-list" id="nmList"></div>
    </section>`;
  document.body.appendChild(overlay);

  const panel = overlay.querySelector(".nm-panel");
  const listEl = document.getElementById("nmList");
  const searchEl = document.getElementById("nmSearch");
  const chapterEl = document.getElementById("nmChapter");
  const infoEl = document.getElementById("nmInfo");
  const openBtn = document.getElementById("nmMainBtn");
  const closeBtn = document.getElementById("nmClose");

  let subject = "physics";
  let chapter = "all";
  let term = "";

  /* ---------- Helpers ---------- */
  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function hl(text, t) {
    const safe = esc(text);
    if (!t) return safe;
    const rx = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safe.replace(new RegExp("(" + rx + ")", "gi"), "<mark>$1</mark>");
  }

  function fillChapters() {
    const items = DATA[subject];
    const chapters = [...new Set(items.map(i => i.ch))];
    chapterEl.innerHTML =
      '<option value="all">सभी अध्याय (' + items.length + ')</option>' +
      chapters.map(ch => {
        const n = items.filter(i => i.ch === ch).length;
        return '<option value="' + esc(ch) + '">' + esc(ch) + ' (' + n + ')</option>';
      }).join("");
    chapterEl.value = "all";
    chapter = "all";
  }

  function render() {
    const isChem = subject === "chemistry";
    const t = term.trim().toLowerCase();
    const items = DATA[subject]
      .map((item, i) => ({ ...item, no: i + 1 }))
      .filter(it => chapter === "all" || it.ch === chapter)
      .filter(it => !t || (it.q + " " + it.a + " " + it.s + " " + it.ch).toLowerCase().includes(t));

    if (!items.length) {
      listEl.innerHTML = '<div class="nm-empty">कोई सवाल नहीं मिला। कुछ और खोजें।</div>';
    } else {
      listEl.innerHTML = items.map(it => `
        <article class="nm-card ${isChem ? "chem" : ""}">
          <div class="nm-card-head">
            <span class="nm-qno">${isChem ? "Chem" : "Phy"} Q${it.no}</span>
            <span class="nm-badge">${esc(it.ch)}</span>
          </div>
          <p class="nm-question">${hl(it.q, term.trim())}</p>
          <button type="button" class="nm-toggle" aria-expanded="false">हल दिखाएँ</button>
          <div class="nm-solution">
            <p class="nm-answer">उत्तर: ${esc(it.a)}</p>
            <pre class="nm-steps">${esc(it.s)}</pre>
          </div>
        </article>`).join("");
    }
    infoEl.textContent = items.length + " / " + DATA[subject].length + " सवाल दिखाए जा रहे हैं";
  }

  function setAll(open) {
    listEl.querySelectorAll(".nm-solution").forEach(s => s.classList.toggle("open", open));
    listEl.querySelectorAll(".nm-toggle").forEach(b => {
      b.textContent = open ? "हल छिपाएँ" : "हल दिखाएँ";
      b.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- Open / Close ---------- */
  function openPanel() {
    overlay.classList.add("nm-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closePanel() {
    overlay.classList.remove("nm-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (openBtn) openBtn.focus();
  }

  /* ---------- Events ---------- */
  if (openBtn) {
    openBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      openPanel();
    });
  }

  closeBtn.addEventListener("click", closePanel);
  overlay.addEventListener("click", e => { if (e.target === overlay) closePanel(); });
  panel.addEventListener("click", e => e.stopPropagation());
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("nm-open")) closePanel();
  });

  overlay.querySelectorAll(".nm-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.querySelectorAll(".nm-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      subject = btn.dataset.subject;
      term = "";
      searchEl.value = "";
      fillChapters();
      render();
    });
  });

  chapterEl.addEventListener("change", e => { chapter = e.target.value; render(); });
  searchEl.addEventListener("input", e => { term = e.target.value; render(); });

  listEl.addEventListener("click", e => {
    const btn = e.target.closest(".nm-toggle");
    if (!btn) return;
    const open = btn.parentElement.querySelector(".nm-solution").classList.toggle("open");
    btn.textContent = open ? "हल छिपाएँ" : "हल दिखाएँ";
    btn.setAttribute("aria-expanded", String(open));
  });

  document.getElementById("nmShowAll").addEventListener("click", () => setAll(true));
  document.getElementById("nmHideAll").addEventListener("click", () => setAll(false));
  document.getElementById("nmPrint").addEventListener("click", () => { setAll(true); window.print(); });

  /* ---------- Init ---------- */
  fillChapters();
  render();
})();
