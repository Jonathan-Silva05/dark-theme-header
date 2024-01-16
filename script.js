

  /* =================== MENU RESPONSIVO ================== */
    var ul = document.querySelector('header ul');
    var menuBtn = document.querySelector('.menu-btn i');

    function menuShow() {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }else{
            ul.classList.add('open');
        }
    }
  /* ================= FIM MENU RESPONSIVO ================ */


  /* ============= SCRIPT FIXAR TELA AO CLICAR ============ */
    var overflowFixed = document.getElementById('overflowFixed');
    var fixo = false;           // variavel de controle de clique no botao

    function action() {
      fixo = !fixo;            // nega o valor conforme o clique no botao

      if(fixo) overflowFixed.classList.toggle('fixando');
      else overflowFixed.classList.remove('fixando');
    }
  /* ===================== FIM SCRIPT ===================== */


  /* ================ SCRIPT CONFIGURA TEMA ================ */
    const TOGGLE = document.getElementById("chk");
    const THEME = window.localStorage.getItem("theme");

    // Verifica o tema e atualiza a caixa de seleção
    if (THEME === "dark") {
      document.body.classList.add("dark");
      TOGGLE.checked = true;
    }

    TOGGLE.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      //Atualiza o tema no armazenamento local com base no estado da caixa de seleção
      if (TOGGLE.checked) {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    });
  /* ============== FIM SCRIPT CONFIGURA TEMA ============== */
