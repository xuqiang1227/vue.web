import {mapState} from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      user: mapState({...(state => state.user)}),
      ruleUser: {
        username: [
          {required: true, message: 'Please fill in the user name', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please fill in the password.', trigger: 'blur'},
          {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    setUsername(e) {
      this.$store.commit('setState', {user: {username: e.target.value}});
    },
    setPassword(e) {
      this.$store.commit('setState', {user: {password: e.target.value}});
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login');
          this.$router.push('/main');
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
