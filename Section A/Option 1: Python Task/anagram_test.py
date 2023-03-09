# Import the unittest module and the Solution class from anagram.py
import unittest
from anagram import Solution

# Define a subclass of unittest.TestCase to test the groupAnagrams method
class TestGroupAnagrams(unittest.TestCase):

    # Create an instance of the Solution class as a class attribute
    ob1 = Solution()

    # Define a test method for each test case using the assertEqual method
    def test_example(self):
        input1 = ["eat","tea","tan","ate","nat","bat"]
        output1 = [["bat"],["nat","tan"],["ate","eat","tea"]]
        self.assertEqual(sorted(self.ob1.groupAnagrams(input1)), sorted(output1))

    def test_empty(self):
        input2 = []
        output2 = []
        self.assertEqual(self.ob1.groupAnagrams(input2), output2)

    def test_single(self):
        input3 = ["hello"]
        output3 = [["hello"]]
        self.assertEqual(self.ob1.groupAnagrams(input3), output3)

    def test_duplicate(self):
        input4 = ["cat", "act", "cat", "tac"]
        output4 = [["cat", "act", "cat", "tac"]]
        self.assertEqual(self.ob1.groupAnagrams(input4), output4)

# Run the tests using the unittest.main() function
if __name__ == "__main__":
    unittest.main()