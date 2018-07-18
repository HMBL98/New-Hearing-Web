class Api::V1::MessagesController < ApplicationController
  skip_before_filter :verify_authenticity_token,
                     :if => Proc.new { |c| c.request.format == 'application/json' }
  respond_to :json
   
  def index
    @user = User.find_by(user_params)
    @messages =  @user.messages.last
    render :status => 200,
           :json => { :success => true,
                      :info => "Completed",
                      :data => { :message => @messages } }
  end
      def user_params
        params.require(:user).permit(:authentication_token)
      end
end
