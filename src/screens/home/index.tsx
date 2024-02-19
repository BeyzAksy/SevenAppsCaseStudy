import React, {useState} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useGetCharactersQuery} from '../../data/api/search-api';
import {SafeAreaView} from 'react-native-safe-area-context';
import MultiSelectDropdown from '../../components/dropdown';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleTextChange = (text: string) => {
    setSearchText(text);
  };

  const {data, isLoading, isError} = useGetCharactersQuery(searchText);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {isError && (
        <Text style={styles.errorText}>
          An error occurred while fetching data.
        </Text>
      )}
      <MultiSelectDropdown
        onChangeText={handleTextChange}
        value={searchText}
        data={data?.results || []}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SearchScreen;
