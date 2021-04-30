require 'net/smtp'
Mail.defaults do
  delivery_method :smtp, {
  address: '172.30.31.228',
  port: 25,
  domain: 'jawda.gov.qa',
  enable_starttls_auto: false,
  openssl_verify_mode: 'none' 
}
end

class SendEmail
  def self.send(name=:forgot_password, opts)
    mail = Mail.new do
      from     'support@jawda.gov.qa'
      to       opts[:o].email
      subject  'From Jawda Support'
      body     template[name].(opts)
    end
    puts(mail.deliver!)
  end

  def self.template
    {
      forgot_password: Proc.new{ | options | "Hi #{options[:o].name}, Please click on link to reset password: #{options[:o].reset_password_link}"},
      welcome_email: Proc.new{ | options | "Hi #{options[:o].name}, Welcome to Jawda application, Please click on link to reset password: #{options[:o].reset_password_link}"}
    }
  end
end

# resp = Net::SMTP.start('172.30.31.228', 25) do |smtp|
#   smtp.send_message "Hi Sathish, Welcome to Jawda. PLease use following link to reset your password. http://172.169.16.196/reset/uhgbnhk-4skjhyu", 'support@jawda.gov.qa', 'pskgupta@gmail.com'
# end