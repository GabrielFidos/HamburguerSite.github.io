document.querySelector('.btn_comprar').addEventListener('click', function(){
    const name = document.getElementById('Name').value;  // 'Name' deve ser o ID correto do input
    const LancheName = document.getElementById('LancheName').value;  // 'LancheName' deve ser o ID correto do input
    const address = document.getElementById('address').value;  // 'address' deve ser o ID correto do input
    const tel = document.getElementById('tel').value;  // 'tel' deve ser o ID correto do input
    const payment = document.getElementById('payment').value;  // 'payment' deve ser o ID correto do input
    
    const mensagem = `Pedido de compra:%0A
      Nome do Cliente : ${name}%0A
      Lanche escolhido : ${LancheName}%0A
      Endereço de entrega : ${address}%0A
      Telefone de contato : ${tel}%0A
      Forma de pagamento : ${payment}`;
      
    const whatsapplink = `https://api.whatsapp.com/send?phone=+5512991632472&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsapplink, '_blank');
});
