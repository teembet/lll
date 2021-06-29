import modal from "@/components/modal";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false,
      message: "Hii",
      user: "",
      balance: 0,
      banks: [],
      channels: ["Web", "POS"]
    };
  },

  computed: {
    ...mapGetters(["getUser"])
  },
  async mounted() {
    if (process.client) {
      await this.$store.dispatch("getUser");
      this.getWalletBalance();
      this.BankList();
    }
  },
  methods: {
    async BankList() {
      if (process.client) {
        const result = await axios.post(
          process.env.BASE_URL +
            "paysure/lookup/transfers/banks?pageNumber=1&recordsPerPage=30",
          {},
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(this.getUser).token}`
            }
          }
        );
        this.banks = result.data.data;
      }
    },

    async getWalletBalance() {
      if (process.client) {
        const result = await axios.get(
          process.env.BASE_URL +
            "paysure/lookup/walletbalance/" +
            JSON.parse(this.getUser).walletId,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(this.getUser).token}`
            }
          }
        );
        this.balance = result.data.data.walletBalance;
      }
    }
  }
};
