require 'net/smtp'
class SendEmail
  def self.send(name, opts)
    resp = Net::SMTP.start('172.30.31.228', 25) do |smtp|
      smtp.send_message template[:forgot_password].(opts), 'support@jawda.gov.qa', opts[:o].email
    end
    puts(resp)
    resp
  end

  def self.template
    {
      forgot_password: Proc.new{ | options | "Hi #{options[:o].name}, Please click on link to reset password: #{options[:o].reset_password_link}"},
      welcome_email: Proc.new{ | options | "Hi #{options[:o].name}, Welcome to Jawda application, Please click on link to reset password: #{options[:o].reset_password_link}"}
    }
  end
end

# resp = Net::SMTP.start('172.30.31.228', 25) do |smtp|
#   smtp.send_message "Hi Sathish, Welcome to Jawda. PLease use following link to reset your password. http://172.169.16.196/reset/uhgbnhk-4skjhyu", 'support@jawda.gov.qa', 'sathish@bizraums.com'
# end