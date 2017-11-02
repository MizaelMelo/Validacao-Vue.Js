Vue.use(VeeValidate);

const dictionary = {
    pt: {
        custom: {
            codigo: {
                required: '* Campo Obrigatório',
                regex: '* Código com 6 dígitos'
            },
            obrigatorio: {
                required: '* Campo obrigatório'
             },
            codbar: {
                required: '* Campo obrigatório',
                regex: 'Digite um código de barra válido'
            },
            preco: {
                required: '* Campo obrigatório',
                regex: 'Inclua um preço válido'
            }
         }
    }
};

VeeValidate.Validator.updateDictionary(dictionary);
VeeValidate.Validator.setLocale('pt');

new Vue({
    el: '#form',
    data: {
        codbar: ''
    },
    methods: {
      validateBeforeSubmit: function () {
          this.$validator.validateAll();
          if (!this.errors.any()) {
            this.$refs.cadastro.submit();
          }
        }
    }
});