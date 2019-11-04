<template lang="pug">
div
  form.form-horizontal(name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field")
    input(type="hidden" name="form-name" value="ask-question")
    .form-group
      label.col-sm-3.control-label(for='name1') お名前
      .col-sm-6
        input.form-control(type='text', name='name' required)
    .form-group
      label.col-sm-3.control-label(for='email') メールアドレス
      .col-sm-6
        input.form-control(type='text', name='email' required)
    .form-group
      label.col-sm-3.control-label(for='ask1') お問い合わせ内容
      .col-sm-6
        textarea.form-control(rows='7', name='message' required)
    .form-group
      label.col-sm-3
      .col-sm-9
        button.btn.btn-primary(nuxt-link to="/") 送信する
</template>
