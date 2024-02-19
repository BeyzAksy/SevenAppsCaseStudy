import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FlatList} from 'react-native-gesture-handler';
import ArrowUp from '../../assets/icons/arrow-up';
import ArrowDown from '../../assets/icons/arrow-down';
import {styled} from 'nativewind';

interface Character {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

interface MultiSelectDropdownProps {
  onChangeText: (text: string) => void;
  data: Character[];
  value: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  data,
  ...props
}) => {
  const [selectedCharacters, setSelectedCharacters] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const DropdownContainer = styled(TouchableOpacity);
  const SelectedBox = styled(TouchableOpacity);
  const StyledCheckBox = styled(CheckBox);
  const StyledImage = styled(Image);

  const handleSelectCharacter = (character: Character) => {
    const isSelected = selectedCharacters.find(
      char => char.id === character.id,
    );
    if (isSelected) {
      setSelectedCharacters(
        selectedCharacters.filter(char => char.id !== character.id),
      );
    } else {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const renderItem = ({item}: {item: Character}) => (
    <>
      <TouchableOpacity onPress={() => handleSelectCharacter(item)}>
        <StyledView className="flex-row items-center  m-3">
          <StyledCheckBox
            disabled={false}
            boxType="square"
            onFillColor="#0175FF"
            onCheckColor="white"
            animationDuration={0.25}
            value={selectedCharacters.includes(item)}
            className="w-4 h-4 ml-2"
          />
          <StyledImage
            source={{uri: item.image}}
            className="w-11 h-11 rounded-md mx-3"
          />
          <StyledView className="flex">
            <StyledText className="text-text-100 font-bold">
              {highlightSearchText(item.name)}
            </StyledText>
            <StyledText className=" text-text-200 font-semibold pt-1">
              {item.episode.length} Episodes
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="h-px bg-mainborder" />
      </TouchableOpacity>
    </>
  );

  const highlightSearchText = (text: string) => {
    if (props.value.trim() === '') {
      return text;
    }
    const regex = new RegExp(`(${props.value})`, 'gi');
    return text.split(regex).map((chunk, index) => {
      return index % 2 === 0 ? (
        <Text key={index}>{chunk}</Text>
      ) : (
        <StyledText key={index} className=" font-black">
          {chunk}
        </StyledText>
      );
    });
  };

  return (
    <>
      <DropdownContainer
        className="border border-mainborder mb-4 rounded-xl"
        onPress={() => setIsOpen(!isOpen)}>
        {selectedCharacters.length > 0 ? (
          <StyledView className="flex-col p-3">
            <StyledView className="pb-2">
              <StyledText className="font-semibold">Characters</StyledText>
            </StyledView>
            <StyledView className="flex-row flex-wrap">
              {selectedCharacters.map(character => (
                <SelectedBox
                  key={character.id}
                  className="rounded-xl py-2 px-1 bg-background-100 p-3 m-1"
                  onPress={() => handleSelectCharacter(character)}>
                  <StyledText className=" text-text-100 font-bold">
                    {character.name}
                  </StyledText>
                </SelectedBox>
              ))}
            </StyledView>
          </StyledView>
        ) : (
          <StyledText className="p-3 font-semibold">
            Select characters
          </StyledText>
        )}
        <StyledView className="absolute justify-center items-center inset-y-4 right-2">
          {!isOpen ? (
            <ArrowUp strokeWidth="2" />
          ) : (
            <ArrowDown strokeWidth="2" />
          )}
        </StyledView>
      </DropdownContainer>
      {isOpen && (
        <>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search character"
              {...props}
            />

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </>
      )}
    </>
  );
};

export default MultiSelectDropdown;

const styles = StyleSheet.create({
  container: {
    height: '50%',
    borderWidth: 1,
    borderColor: '#9BAABD',
    borderRadius: 12,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    margin: 12,
    borderColor: '#9BAABD',
    borderRadius: 12,
  },
});
