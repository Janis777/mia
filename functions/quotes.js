var Content = [
    "Träume dir dein Leben schön und mach aus diesen Träumen eine Realität - Marie Curie",
    "Jeder Mensch hat ein Brett vor dem Kopf – es kommt nur auf die Entfernung an - Marie von Ebner-Eschenbach",
    "Sei die Heldin deines Lebens, nicht das Opfer - Nora Ephron",
    "Leben wird nicht gemessen an der Zahl von Atemzügen, die wir nehmen; sondern an den Momenten, die uns den Atem nehmen - Maya Angelou",
    "Karriere ist etwas Herrliches, aber man kann sich nicht in einer kalten Nacht an ihr wärmen - Marilyn Monroe",
    "Die meisten Menschen geben ihre Macht auf, indem sie denken, sie hätten keine - Alice Walker",
    "Gib niemals auf, für das zu kämpfen, was du tun willst. Mit etwas, wo Leidenschaft und Inspiration ist, kann man nicht falsch liegen - Ella Fitzgerald",
    "Was für ein herrliches Leben hatte ich! Ich wünschte nur, ich hätte es früher bemerkt - Colette",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid, of how much they love me - Michael Scott",
    "Wenn man glücklich ist, soll man nicht noch glücklicher sein wollen - Theodor Fontane",
    "Viele Menschen versäumen das kleine Glück, während sie auf das Große vergebens warten - Pearl S. Buck",
    "Nur tote Fische schwimmen gegen den Strom - Joke Göpfert",
    "Lass dich nicht gehen, gehe selbst - Magda Bentrup",
    "Auch eine schwere Tür hat nur einen kleinen Schlüssel nötig - Charles Dickens",
]

function show_snack() {
    var randomContent = Math.floor(Math.random() * (Content.length));
    document.getElementById("b_mia").innerHTML = window.alert(Content[randomContent]);
    Content.splice(randomContent, 1);
}