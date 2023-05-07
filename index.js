// Key Concept of the Project :
//     Document.querySelector()
//     addEventListener()
//     Math Object()
//     InnerText
const btn = document.querySelector("button");
console.log(btn);
const message = document.querySelector("p");
console.log(message);

const messages=['"Kitne jyada natak h tere , Mujhe toh samajh nai aata ki ladki mai hu ya Tu . Jabki natak toh mere hone chahiye" (-_-) ','"Bhul gaya na tu Mujhe. Tujhse ye expected nai tha Kuku" ', "Agar meri yaad aa rahi hoti toh call toh kar liya hota tune and if call nai toh atleast text.",' "Dikh raha h kitna matter karti h mai tere liye."','"Insta pe Story daalta h, faaltu ke post like karta h per mujhe text nai kar sakta. Kaha ke sanskar h ye."', '"Are Yrrr......Ek accha ,caring aur handsome best-friend toh mai bhi deserve karti hu, jo humesha saath rahe aur jo acchi batein bhi kare aur atleast jisko dohre na chadhe raat hote hi aur vo  "dur ho ja , bhaag ja ......" wali gandi baatein bhi na kare mere saath."','Jab mere jesi pyari si ladki ke saath tujhe ese hi karna tha toh pehle hi bata deta na kyuki ab toh sab kisi na kisi ke liye reserve ho gaye h ab koi dusra nai milega mujhe. Tujhe kya h tere toh bohot dost h.','"Ek din tujhe bori me bharke itna marungi na aur phir kisi acchi si unchi si building se phek dungi jo road ke pass ho taki agar tu bach bhi gaya toh truck ke niche aa jaye" ' ];
let counter=0;
btn.addEventListener("click",function()
{
    message.innerText=messages[counter]; 
    counter++;
    if(counter>=messages.length+1)
    {
        message.innerText=("Itna sab sunne ke baad bhi esa nai ho raha tujhe ki call ya text kar lu  and sorry bol du (-_-).");
        btn.remove();
    }
});
