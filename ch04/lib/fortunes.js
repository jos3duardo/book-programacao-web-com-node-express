const fortuneCookies = [
    'Vença seus medos ou eles o conquistarão.',
    'Rios precisam de primavera.',
    "Não tema o que você não conhece.",
    "Você terá uma surpresa agradável.",
    "Sempre que possível, mantenha-o simples."
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortunes.length)

    return fortuneCookies[idx]
}