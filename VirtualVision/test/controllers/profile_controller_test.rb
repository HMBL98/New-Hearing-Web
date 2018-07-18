require 'test_helper'

class ProfileControllerTest < ActionController::TestCase
  test "should get myaccount" do
    get :myaccount
    assert_response :success
  end

end
