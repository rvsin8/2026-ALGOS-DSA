public class Codec {

    // Encodes a list of strings to a single string.
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String s : strs) {
            sb.append(s.length());
            sb.append('#');
            sb.append(s);
        }

        return sb.toString();
    }

    // Decodes a single string to a list of strings.
    public List<String> decode(String s) {
        List<String> result = new ArrayList<>();

        int i = 0;
        while (i < s.length()) {
            int j = i;
            
            while (s.charAt(j) != '#') j++;

            int length = Integer.parseInt(s.substring(i,j));

            j++;

            result.add(s.substring(j, j + length));

            i = j + length;
        }
        
        return result;
    }
}