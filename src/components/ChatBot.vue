<template>
  <div class="chatbot-container p-6 border border-[#434343] rounded-xl w-full max-w-xl mx-auto mb-20 bg-white shadow-lg">
    <h2 class="text-[#434343] text-[20px] font-bold mb-4 text-center">🤖 Hi, I'm André's artificial friend.<br> Ask me something about him.</h2>

    <!-- Chat Messages -->
    <div
      class="chat-box flex flex-col gap-3 mb-4 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#676767] scrollbar-track-[#EDEDED]"
    >
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="msg.sender === 'You' 
                  ? 'self-end bg-[#676767] text-white' 
                  : 'self-start bg-[#f1f1f1] text-[#434343]'"
        class="px-4 py-2 rounded-xl max-w-[75%] break-words shadow-sm"
      >
        <strong class="block mb-1">{{ msg.sender }}:</strong> {{ msg.text }}
      </div>
    </div>

    <!-- Input -->
    <div class="flex gap-2">
      <input
        type="text"
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="Type your question..."
        class="flex-1 px-4 py-3 border border-[#434343] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#676767]"
      />
      <button
        @click="sendMessage"
        class="px-5 py-3 bg-[#676767] text-white rounded-xl hover:bg-[#555] transition-colors"
      >
        Send
      </button>
    </div>
  </div>
</template>

<style>
/* Custom scroll for the chat box */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #edeef0;
  border-radius: 3px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #676767;
  border-radius: 3px;
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      userMessage: "",
      messages: []
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;

      // Add user message
      this.messages.push({ sender: "You", text: this.userMessage });

      try {
        const res = await axios.post("http://127.0.0.1:8000/chat", {
          question: this.userMessage
        });

        this.messages.push({ sender: "Chatbot", text: res.data.response });
      } catch (err) {
        this.messages.push({ sender: "Chatbot", text: "Error connecting to server." });
      }

      this.userMessage = "";

      // Auto scroll
      this.$nextTick(() => {
        const container = this.$el.querySelector(".chat-box");
        container.scrollTop = container.scrollHeight;
      });
    }
  }
};
</script>
