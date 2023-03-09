require_relative '../palindrome'

describe "is_palindrome" do
    context "given the number zero" do
        it "returns false" do
          expect(is_palindrome(0)).to eq(false)
        end
    end

    context "given the number 121" do
        it "returns true" do
          expect(is_palindrome(121)).to eq(true)
        end
    end

    context "given the number -121" do
        it "returns false" do
          expect(is_palindrome(-121)).to eq(false)
        end
    end

    context "given the number 57985" do
        it "returns false" do
          expect(is_palindrome(57985)).to eq(false)
        end
    end

    context "given the number 0554550" do
        it "returns true" do
          expect(is_palindrome(35453)).to eq(true)
        end
    end
end