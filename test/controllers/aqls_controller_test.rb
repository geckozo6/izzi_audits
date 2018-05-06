require 'test_helper'

class AqlsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @aql = aqls(:one)
  end

  test "should get index" do
    get aqls_url
    assert_response :success
  end

  test "should get new" do
    get new_aql_url
    assert_response :success
  end

  test "should create aql" do
    assert_difference('Aql.count') do
      post aqls_url, params: { aql: { aql: @aql.aql, batch_size: @aql.batch_size, first_rejection: @aql.first_rejection, fisrt_sample: @aql.fisrt_sample, letter_code: @aql.letter_code, second_Sample: @aql.second_Sample, second_rejection: @aql.second_rejection } }
    end

    assert_redirected_to aql_url(Aql.last)
  end

  test "should show aql" do
    get aql_url(@aql)
    assert_response :success
  end

  test "should get edit" do
    get edit_aql_url(@aql)
    assert_response :success
  end

  test "should update aql" do
    patch aql_url(@aql), params: { aql: { aql: @aql.aql, batch_size: @aql.batch_size, first_rejection: @aql.first_rejection, fisrt_sample: @aql.fisrt_sample, letter_code: @aql.letter_code, second_Sample: @aql.second_Sample, second_rejection: @aql.second_rejection } }
    assert_redirected_to aql_url(@aql)
  end

  test "should destroy aql" do
    assert_difference('Aql.count', -1) do
      delete aql_url(@aql)
    end

    assert_redirected_to aqls_url
  end
end
